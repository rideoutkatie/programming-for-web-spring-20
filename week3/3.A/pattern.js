let rotateBy=30;
function setup() {
	createCanvas(600, 600);
	background(255);
	angleMode(DEGREES);
	
}

function makeArm(rotateBy){
	alt = Math.round(rotateBy / 360)
	console.log(alt);
	noFill();
	stroke('#FDF6E5');
	strokeWeight(1);
	rect(30, 10, 1 + alt, 1 * alt);	
	stroke('#ffcccc')
	ellipse(40, 40, 1 + alt, 1 * alt);
	stroke('#f2ffcc')
	bezier(50, 50, 50, 50, 200 - alt, 100 - alt, 10, 10);
	stroke('#FAF6FE');
	bezier(100, 100, 100, 100, 400 - alt, 200 - alt, 100, 100);
	stroke('#A6A9FE');
	strokeWeight(.3);
	rect(10, 10, 10 * alt, 1 - alt);	
	stroke('#2EBA8B');
	bezier(50, 100, 100, 100, 400 / alt, 200 / alt, 100, 100);
	stroke('#F8BC36');
	bezier(50, 10, 10, 10, 10 * alt, 10 / alt, 200, 100);
}

function draw() {
	translate(300, 300);
	rotate(rotateBy); 
	makeArm(rotateBy);
	rotateBy += 30;
}

function mousePressed(){
	noLoop();
}