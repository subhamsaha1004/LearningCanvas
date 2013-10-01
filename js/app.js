(function(window){
	var doc = window.document;

	var canvas = doc.querySelector('#canvas');
	if(canvas.getContext){
		var context = canvas.getContext('2d');
	} else {
		console.log('Canvas is not supported');
	}
		

	/* Setting the shadow **/
	context.shadowOffsetX = 2;
	context.shadowOffsetY = 2;
	context.shadowBlur = 10; 
	context.shadowColor = 'DarkRed';

	/* Drawing rectangles **/
	context.fillStyle = "#ee1821";
	context.fillRect(50, 50, 100, 100);
	context.strokeStyle = "#2ecc71";
	context.strokeRect(200, 50, 100, 100);
	context.fillRect(220, 70, 60, 60);

	/* Drawing paths **/
	context.shadowColor = 'none';
	context.moveTo(50, 200);
	context.lineTo(150, 200);
	context.strokeStyle = "brown";
	context.stroke();
	context.beginPath(); // to draw a line with different color, will have to call this method; Without it the stroke method will redraw the previous line with last-called strokeStyle color
	context.moveTo(200, 200.5); // to draw a 1px line we have to shift the co-ordinate by 0.5 to left/right/up/down which ever suits the purpose. This is because integer value of the coordinate is to be considered at the edge of each pixel. Drawing a line at the edge will simply make the line spread across two pixels. By shfting 0.5pixel the line spread between two pixels but occupy half of each.
	context.lineTo(300, 200.5);
	context.strokeStyle = "blue";
	context.stroke();
	context.closePath();

	/* loading images */
	var img = new Image();
	img.src = "images/butterfly.png";
	//img.id = "butterfly"
	//doc.getElementById('content').appendChild(img);

	context.drawImage(img, 50, 250);
	context.drawImage(img, 200, 250, 100, 100);
	context.drawImage(img, 0, 0, 50, 50, 500, 250, 50, 50);

	/** Drawing text **/
	context.fillStyle = "orange";
	context.font = "italic bold 30px sans-serif";
	context.textBaseline = "bottom";
	context.fillText('HTML5 is cool', 50, 300);

	context.strokeStyle = "hotpink";
	context.font = "40px sans-serif";
	context.textBaseline = 'bottom';
	context.strokeText('HTML5 is cool', 300, 300);

	context.beginPath();
	context.moveTo(50, 400);
	context.lineTo(550, 400);
	context.stroke();
	context.closePath();

	context.font = "16px sans-serif"
	context.textBaseline = "top";
	context.fillText('Top', 50, 400);

	context.textBaseline = "hanging";
	context.fillText('Hanging', 100, 400);

	context.textBaseline = "middle";
	context.fillText('middle', 200, 400);

	context.textBaseline = "alphabetic";
	context.fillText('alphabetic', 300, 400);

	context.textBaseline = "ideographic";
	context.fillText('ideographic', 400, 400);

	context.textBaseline = "bottom";
	context.fillText('bottom', 500, 400);

	/** try drawing a cube **/
	context.fillStyle = "red";
	context.fillRect(50, 500, 55, 50);

	context.fillStyle = "rgba(0, 0, 200, 0.5)";
	context.fillRect(70, 520, 55, 50);

	context.beginPath();
	context.strokeStyle = "blue";
	context.moveTo(51, 501);
	context.lineTo(71, 521);
	context.stroke();

	context.moveTo(105, 501);
	context.lineTo(125, 521);
	context.stroke();

	context.moveTo(51, 550);
	context.lineTo(71, 570);
	context.stroke();

	context.moveTo(104, 550);
	context.lineTo(124, 570);
	context.stroke();

	context.font = "italic bold 30px sans-serif";
	context.fillText('This is a cube', 200, 550);

	context.closePath();

	/** draw a triangle **/
	context.beginPath();
	context.moveTo(350, 75);
	context.lineTo(375, 100);
	context.lineTo(375, 50);
	context.fill();
	context.closePath();

	context.beginPath();
	context.moveTo(375, 50);
	context.lineTo(400, 75);
	context.lineTo(375, 100);
	context.stroke();
	context.closePath();

	/** Draw a circle **/
	context.beginPath();
	context.strokeStyle = "green";
	context.arc(475, 100, 50, 0, Math.PI * 2, true);
	context.moveTo(510, 100);
	context.arc(475, 100, 35, 0, Math.PI, false);
	context.moveTo(465, 90);
	context.arc(460, 90, 5, 0, Math.PI * 2, true);
	context.moveTo(495, 90);
	context.arc(490, 90, 5, 0, Math.PI * 2, true);
	context.stroke();

}(this));