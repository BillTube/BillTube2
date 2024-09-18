// Append the canvas to the #wrap element
$("#wrap").append("<canvas id='canvas'></canvas>");

// Define the CSS styles
var css = `
canvas {
	position: absolute;
	width: 96%;
	height: 96%;
	filter: blur(3rem);
	top: 2%; left: 2%; 
	z-index: -1;
	opacity: 1;
}
.well, .section, #controlsrow {
    background: #0000006b;
}
.et-hero-tabs-container {
    background: #00000061;
    backdrop-filter: none;
}
button#Ambient {display: none;}
.chat-area-header {background: none!important;}
#marq, .chat-area-group {background: none!important;}
.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {background: none !important;}
#wrap {background: none!important;}
#chatwrap {background: #4949491a!important;}
#videowrap .embed-responsive {background: hsl(0deg 0% 0% / 0%)!important;}
.video-js {background-color: #00000021!important;}
#currenttitle {max-width: 235px!important;}
div#videowrap {background: #0000004f!important;}
section.ambient--off {
	canvas {
		opacity: 0;
	}
}
`;

// Create and append the style tag to the head
var cssTag = document.createElement('style');
if (cssTag.styleSheet) {
    cssTag.styleSheet.cssText = css;
} else {
    cssTag.appendChild(document.createTextNode(css));
}
document.querySelector('head').appendChild(cssTag);

// Listen for messages from other windows or iframes
window.addEventListener('message', function(e) {
    var data;
    try {
        data = JSON.parse(e.data);
    } catch {
        return;
    }
    if (data.event === 'onStateChange') {
        onPlayerStateChange(data.info);
    }
});

// Refresh the video (assuming refreshVideo is defined elsewhere)
refreshVideo();

// Immediately Invoked Function Expression (IIFE) to encapsulate the logic
(function() {
    // Flag to ensure mediarefresh is clicked only once
    let isFirstAmbientActivation = true;

    // Function to handle media changes
    function onChangeMedia(media) {
        const canvas = document.getElementById('canvas');
        const video = document.getElementById('ytapiplayer_html5_api') || 
                      document.querySelector('video') || 
                      document.getElementById('ytapiplayer');
        if (!video) {
            console.warn("Video element not found.");
            return;
        }
        const ctx = canvas.getContext('2d');

        ctx.filter = "blur(3rem)";

        video.addEventListener(
            "play",
            function () {
                var $this = this; // Cache the video element
                (function loop() {
                    if (!$this.paused && !$this.ended) {
                        ctx.drawImage($this, 0, 0, canvas.width, canvas.height);
                        setTimeout(loop, 1000 / 30); // Drawing at 30fps
                    }
                })();
            },
            { once: true } 
        );


        const toggleAmbient = document.querySelector("#toggleAmbient");
        const ambientSection = document.querySelector("#wrap");

        if (toggleAmbient) {
            toggleAmbient.addEventListener("click", function() {

                const isAmbientActive = !ambientSection.classList.contains('ambient--off');

                if (isAmbientActive && isFirstAmbientActivation) {
                    isFirstAmbientActivation = false; // Update the flag

                    const mediaRefreshButton = document.getElementById("mediarefresh");
                    if (mediaRefreshButton) {
                        mediaRefreshButton.click(); // Virtually click the mediarefresh button
                        console.log("mediarefresh button clicked due to first ambient activation.");
                    } else {
                        console.warn("mediarefresh button not found.");
                    }
                }
            });
        } else {
            console.warn("#toggleAmbient button not found.");
        }
    }

    socket.on('changeMedia', onChangeMedia);
})();
