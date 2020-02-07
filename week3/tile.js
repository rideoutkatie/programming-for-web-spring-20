function setup() {
  createCanvas(200,200);
}

function createTile() {
	translate(0, 0);
	fill('#FF5733 ');
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
	fill('white');
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
	
	fill('#FF5733 ')
	stroke('white');
	strokeWeight(5);
	circle(200, 200, 230);
	fill('white ')
	stroke('white')
	circle(200, 200, 180);
	fill('#FF5733 ')
	stroke('white');
	circle(200, 200, 130);
	fill('white ')
	stroke('white')
	circle(200, 200, 80);
	
	
	


}

function draw() {
	createTile();
	noLoop();
}