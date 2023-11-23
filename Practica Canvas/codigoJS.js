/* tweetshirt.js */

window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;

	
}

function previewHandler() {
    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");

    fillBackgroundColor(canvas, context);

    var selectShape = document.getElementById("shape");
    var shapeIndex = selectShape.selectedIndex;
    var shape = selectShape.options[shapeIndex].value;

	var selectShapeColor = document.getElementById("shapeColor");
	var shapeColor = selectShapeColor.value;

    var tituloInput = document.getElementById("titulo");
    var titulo = tituloInput.value;

    drawShapes(canvas, context, shape, shapeColor);
    drawText(canvas, context, titulo);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
    var selectBackgroundColor = document.getElementById("color");
    var bgColor = selectBackgroundColor.value;

    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}
function drawShapes(canvas, context, shape, shapeColor) {
    context.fillStyle = shapeColor;

    for (var i = 0; i < 20; i++) {
        if (shape === "circles") {
            drawCircle(canvas, context);
        } else if (shape === "squares") {
            drawSquare(canvas, context);
        }
    }
}

// Draws a circle at a random location
function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);
    context.fill();
}
function drawSquare(canvas, context) {
    var size = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.fillRect(x, y, size, size);

	
	
}

// draws all the text, including the tweet
function drawText(canvas, context, titulo) {
    context.fillStyle = "blue";
    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText(titulo, 20, 40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "twitterBird.png";
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}




