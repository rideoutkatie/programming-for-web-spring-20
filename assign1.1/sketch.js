function setup() {
  createCanvas(480,120);
}

function draw() {
  if (mouseIsPressed) {
		fill(0);
	} else {
		noFill();
		noStroke
		();
	}
	ellipse(mouseX,mouseY, 80, 80); 
	} 