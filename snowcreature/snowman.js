let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "orange");
let stroke2 = prompt("enter another basic color name in lower case", "brown");
function setup (){
	createCanvas(1000, 800);
	background("#ccc");
	grid = loadImage("images/100px_grid.png")
}

function draw(){
	//background(grid);
	//snow
	fill("#d0eff8");
	rect(0,600,1000,200);
	//arms
	stroke(stroke1);
	strokeWeight(20);
	line(350,400,200,200);
	line(650,400,800,200);
	//snowman legs
	fill("#f1f1f1");
	stroke("gray");
	strokeWeight(15);
	
	//left leg
	ellipse(350, 650, 200);
	//right leg
	ellipse(650, 650, 200);
	//body
	ellipse(500, 450, 350, 400);
	//head
	ellipse(500, 200, 200);
	//hat brim
	stroke(stroke2);
	strokeWeight(40);
	line(400,120,600,120);
	//hat body
	quad(400, 50, 500, 50, 550, 120, 450, 120);
	//eyes
	stroke(0);
	strokeWeight(20);
	point(460, 180);
	point(540, 180);
	//mouth
	noFill();
	strokeWeight(10);
	arc(500, 220, 70, 50, 0, PI);
	//buttons
	stroke(0);
	strokeWeight(35);
	point(500,450);
	point(500,500);
	point(500,400);
	
	
}