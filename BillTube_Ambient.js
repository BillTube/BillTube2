$("#wrap").append("<canvas id='canvas'></canvas>");
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

  var cssTag = document.createElement('style');
  if (cssTag.styleSheet) {
    cssTag.styleSheet.cssText = css;
  } else {
    cssTag.appendChild(document.createTextNode(css));
  }

  document.querySelector('head').appendChild(cssTag);
  window.addEventListener('message', function(e) {
    var data;
    try
    {
      data = JSON.parse(e.data);
    }
    catch
    {
      return;
    }
    if (data.event === 'onStateChange') {
      onPlayerStateChange(data.info);
    }
  });



refreshVideo();

(function() {
  function onChangeMedia(media) {

const canvas = document.getElementById('canvas');
const video = document.getElementById('ytapiplayer_html5_api', 'video', 'ytapiplayer');
const ctx = canvas.getContext('2d');

ctx.filter = "blur(3rem)";

video.addEventListener(
	"play",
	function () {
		var $this = this; //cache
		(function loop() {
			if (!$this.paused && !$this.ended) {
				ctx.drawImage($this, 0, 0, canvas.width, canvas.height);
				setTimeout(loop, 1000 / 30); // drawing at 30fps
			}
		})();
	},
	0
);

// toggleAmbient
const toggleAmbient = document.querySelector("#toggleAmbient");
const ambientSection = document.querySelector("#wrap");



}
  socket.on('changeMedia', onChangeMedia);
})();

