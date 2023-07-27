/* The code `(function ($) { ... })` is a self-invoking anonymous function that takes in the jQuery
object as a parameter. This is a common pattern used in JavaScript to create a private scope for
variables and functions, preventing them from polluting the global namespace. */
(function ($) {

    var unicode_charAt = function(string, index) {
        var first = string.charCodeAt(index);
        var second;
        if (first >= 0xD800 && first <= 0xDBFF && string.length > index + 1) {
            second = string.charCodeAt(index + 1);
            if (second >= 0xDC00 && second <= 0xDFFF) {
                return string.substring(index, index + 2);
            }
        }
        return string[index];
    };

/* The `unicode_slice` function is used to extract a portion of a string based on Unicode characters
instead of individual characters. It takes three parameters: `string` (the input string), `start`
(the starting index of the portion to extract), and `end` (the ending index of the portion to
extract). */
    var unicode_slice = function(string, start, end) {
        var accumulator = "";
        var character;
        var stringIndex = 0;
        var unicodeIndex = 0;
        var length = string.length;

        while (stringIndex < length) {
            character = unicode_charAt(string, stringIndex);
            if (unicodeIndex >= start && unicodeIndex < end) {
                accumulator += character;
            }
            stringIndex += character.length;
            unicodeIndex += 1;
        }
        return accumulator;
    };

    /* The code `$.fn.initial = function (options) { ... }` is defining a new jQuery plugin called
    "initial". This plugin can be used to generate initial avatars based on the provided options. */
    $.fn.initial = function (options) {

        // Defining Colors
        var colors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#0080a5", "#34495e", "#2c3e50", "#87724b", "#7300a7", "#ec87bf", "#d870ad", "#f69785", "#9ba37e", "#b49255", "#a94136"];
        var finalColor;

        return this.each(function () {

            var e = $(this);
            var settings = $.extend({
                // Default settings
                name: 'Name',
                color: null,
                seed: 0,
                charCount: 2,
                textColor: '#ffffff',
                height: 100,
                width: 100,
                fontSize: 50,
                fontWeight: 100,
                fontFamily: 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
                radius: 12
            }, options);

            /* The code `settings = $.extend(settings, e.data());` is using the jQuery `$.extend()`
            function to merge the `settings` object with the `data` attributes of the element `e`. */
            settings = $.extend(settings, e.data());

            /* The code is creating a text element (`<text>`) and setting its attributes and styles
            based on the provided settings. */
            var c = unicode_slice(settings.name, 0, settings.charCount).toUpperCase();
            var cobj = $('<text text-anchor="middle"></text>').attr({
                'y': '50%',
                'x': '50%',
                'dy' : '0.35em',
                'pointer-events':'auto',
                'fill': settings.textColor,
                'font-family': settings.fontFamily,
              'border-radius': settings.radius+'px',
            }).html(c).css({
                'font-weight': settings.fontWeight,
                'font-size': settings.fontSize+'px',
              'border-radius': settings.radius+'px',
            });

            /* The code is checking if the `color` property in the `settings` object is `null`. If it
            is `null`, it generates a random color based on the first character of the `name`
            property and the `seed` value. The `charCodeAt(0)` method is used to get the Unicode
            value of the first character of the `name` property. The `seed` value is added to the
            Unicode value, and then the modulo operator `%` is used to ensure the result is within
            the range of the `colors` array length. The resulting color is then assigned to the
            `finalColor` variable. */
            if(settings.color == null){
                var colorIndex = Math.floor((c.charCodeAt(0) + settings.seed) % colors.length);
                finalColor = colors[colorIndex]
            }else{
                finalColor = settings.color
            }

            /* The code is creating a new SVG element using jQuery. The SVG element is defined using
            the `<svg>` tag. */
            var svg = $('<svg></svg>').attr({
                'xmlns': 'http://www.w3.org/2000/svg',
                'pointer-events':'none',
                'width': settings.width,
                'height': settings.height,
              'border-radius': settings.radius+'px',
            }).css({
                'background-color': finalColor,
                'width': settings.width+'px',
                'height': settings.height+'px',
                'border-radius': settings.radius+'px',
                '-moz-border-radius': settings.radius+'px'
            });

            svg.append(cobj);
           // svg.append(group);
            var svgHtml = window.btoa(unescape(encodeURIComponent($('<div>').append(svg.clone()).html())));

            e.attr("src", 'data:image/svg+xml;base64,' + svgHtml);

        })
    };
   

}(jQuery));

/* The code `$(function(){ ... })` is a shorthand for `$(document).ready(function(){ ... })`, which
means it will execute the enclosed code when the DOM (Document Object Model) is fully loaded and
ready. */
$(function(){
  $('.AvL').initial(); 
 console.log('initial loading avatars')
})
window.socket.on('chatMsg', function() {
	  $('.AvL').initial(); 
});
