var rotateDiv = document.getElementById('rot');
var rotateIcons = documents.getElementById('rot-icons');
var clickRotateDiv = document.getElementById('click-rot');
var angle = 0;

clickRotateDiv.onclick = function() {
    angle += 60;
    rotateDiv.style.transform ='rotate(' + angle + 'deg)';
    rotateDiv.style.transform = 'rotate(' + angle + 'deg)';
};

var step = 2;
var color1 = 'rgba(0,0,0,0.5)';
var color2 = 'rgba(0,0,0,0.5)';

var gradient = ' conic-gradient(';
for (var i = 0; i < 360; i += step) {
    var color = i % (2 * step) === 0 ? color1 : color2;
    gradient += color + ' ' + i + 'deg, ';
}
gradient = gradient.slice(0, -2)+ '),   rgb(85 93 108)';

rotateDiv.style.background = gradient;


var toggles = document.querySelectorAll(' .toggle');
var tempElement = document