function setup() {
  createCanvas(600,600);
}

function createTile(originX, originY, primaryColor, secondaryColor) {
	translate(originX, originY);
	fill(primaryColor);
	rect(0, 0, 200, 200);
	stroke('white');
	strokeWeight(5);
	line(0, 0, 200, 200);
	line(25, 0, 200, 175);
	line(50, 0, 200, 150);
	line(75, 0, 200, 125);
	line(100, 0, 200, 100);
	line(125, 0, 200, 75);
	line(150, 0, 200, 50);
	line(175, 0, 200, 25);
	strokeWeight(5);
	line(200, 0, 0, 200);
	
	noStroke();
	fill(secondaryColor);
	circle(25, 0, 20);
	circle(50, 0, 20);
	circle(75, 0, 20);
	circle(100, 0, 20);
	circle(125, 0, 20);
	circle(150, 0, 20);
	circle(175, 0, 20);
	circle(0, 25, 20);
	circle(0, 50, 20);
	circle(0, 75, 20);
	circle(0, 100, 20);
	circle(0, 125, 20);
	circle(0, 150, 20);
	circle(0, 175, 20);
	
fill(primaryColor)
	stroke(secondaryColor);
	strokeWeight(5);
	circle(200, 200, 230);
	fill(secondaryColor)
	stroke(secondaryColor)
	circle(200, 200, 180);
	fill(primaryColor)
	stroke(secondaryColor);
	circle(200, 200, 130);
	fill(secondaryColor)
	stroke(secondaryColor)
	circle(200, 200, 80);
	
	
	


}

function draw() {
	createTile(0, 0, '#E74C3C', 'white');
	createTile(0, 200, '#C70039', 'white');
	createTile(0, 200, '#900C3F', 'white');
	
	createTile(200, -400, 'white', '#E74C3C');
	createTile(0, 200, 'white', '#C70039');
	createTile(0, 200, 'white', '#900C3F');
	
	createTile(200, -400, '#E74C3C', 'white');
	createTile(0, 200, '#C70039', 'white');
	createTile(0, 200, '#900C3F', 'white');
	noLoop();
}