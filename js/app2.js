(function(window){
	var doc = window.document;

	var canvas = doc.querySelector('#canvas');
	function resizeCanvas(){
		canvas.width = window.innerWidth - 20;
		canvas.height = window.innerHeight - 25;
		init();
	}

	window.addEventListener('resize', resizeCanvas, false);
	if(canvas.getContext){
		var context = canvas.getContext('2d');
	} else {
		console.log('Canvas is not supported');
	}

	resizeCanvas();

	/** load images */
	function loadImage(){
		var img = new Image();
		img.src = "images/subham.jpg";

		context.drawImage(img, 150, 25);
	}
	/** draw arcs **/
	function draw(rows, cols){
		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				context.beginPath();
				var x = 450 + (j * 50),
						y = 25 + (i * 50),
						radius = 20,
						startAngle = 0,
						endAngle = Math.PI + ((Math.PI * j) / 2),
						antiClockwise = (i % 2 == 0) ? false : true;

				context.arc(x, y, radius, startAngle, endAngle, antiClockwise);

				if(i > 1){
					context.fill();
				} else {
					context.stroke();
				}
			}
		}
	}

	/** Quadratic Bezeier Curves **/
	function quadraticBezier(){
		context.beginPath();
		context.moveTo(75, 25);
		context.quadraticCurveTo(25, 25, 25, 62.5);
		context.quadraticCurveTo(25, 100, 50, 100);
		context.quadraticCurveTo(50, 120, 30, 125);
		context.quadraticCurveTo(60, 120, 65, 100);
		context.quadraticCurveTo(125, 100, 125, 62.5);
		context.quadraticCurveTo(125, 25, 75, 25);
		context.stroke();
	}

	/* initialize the canvas **/
	function init(){
		draw(4, 3);
		loadImage();
		quadraticBezier();
	}

}(this));