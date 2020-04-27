function setup() {
  createCanvas(500, 500);
}

function draw() 

{
  background(255);
	
//	vertical lines
	
	for (var x = 20; x <= 50; x = x + 3)
	for (var x = 300; x <= 320; x = x + 3)
	{
		line(x,20, x, 200);
		stroke(0);
		strokeWeight(.5);
	}
	
		for (var x = 30; x <= 70; x = x + 2.5)
	{
		line(x,10, x, 220);
		stroke(0);
		strokeWeight(1.2);
	}
	
		for (var x = 73; x <= 89; x = x + 3)
	{
		line(x,16, x, 240);
		stroke(0);
		strokeWeight(.5);
	}	
	
	for (var x = 92; x <= 100; x = x + 3)
	for (var x = 320; x <= 340; x = x + 2.5)		
	{
		line(x,24, x, 320);
		stroke(0);
		strokeWeight(.5);
	}	
	
	
//	horizontal lines
	for (var y = 50; y <= 100; y = y + 3)
	for (var y = 50; y <= 100; y = y + 3)	
	{
		line(4, y , 140, y);
		stroke(0);
		strokeWeight(1);
	}
	
	for (var y = 101; y <= 105; y = y + 3)
	{
		line(10, y , 209, y);
		stroke(0);
		strokeWeight(2);
	}
	
	for (var y = 107; y <= 112; y = y + 3)
	{
		line(10, y , 225, y);
		stroke(0);
		strokeWeight(1);
	}
	
	for (var y = 113; y <= 120; y = y + 3)
	for (var y = 250; y <= 255; y = y + 3)
	{
		line(100, y , 500, y);
		stroke(0);
		strokeWeight(2);
	}
		
}	



function mousePressed() {
  noLoop();
}