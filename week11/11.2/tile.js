function setup() {
  createCanvas(500, 500);
}

function draw() 
{
  background(0);

		for (var x = 0; x <= 500; x = x + 50)
	{
		stroke(255, 255, 255);
		strokeWeight(3);
		fill(150, 0, 150);
		rect(x, 100, 30, 30);
		console.log(x)
	}
	
	
	  for (var x = 0; x <= 500; x = x + 50) 
	{
    stroke(150, 0, 150);
    fill('blue');
  	ellipse(x, 200, 30, 30);
		console.log(x)
  }
	
		for (var x = 0; x <= 500; x = x + 50)
	{
		stroke(255, 255, 255);
		strokeWeight(3);
		fill(150, 0, 150);
		rect(x, 270, 30, 30);
		console.log(x)
	}	

	  for (var x = 0; x <= 500; x = x + 50) 
	{
    stroke(150, 0, 150);
    fill('blue');
  	ellipse(x, 370, 30, 30);
		console.log(x)
  }
	
}	

function mousePressed() {
  noLoop();
}