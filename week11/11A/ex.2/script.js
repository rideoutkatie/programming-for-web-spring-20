function setup() {
  createCanvas(1000, 1000);
}

function draw() 

{
  background(255);
	

	  // roof
	for (var x = 75; x <= 510; x = x + 3)
	{
	stroke(1);
  noFill();
  triangle(x, 150, 327, 152, 200, 0);
	}
  // house
	for (var x = 75; x <= 700; x = x + 3)
  {
	noFill();
  rect(x,150, 250, 250);
	}
	
	noStroke();
	fill('255');
  rect(510, 149, 1000, 550);

}


function mousePressed() {
  noLoop();
}