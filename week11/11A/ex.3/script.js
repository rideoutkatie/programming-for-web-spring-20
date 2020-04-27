function setup() {
  createCanvas(710, 500);

}

function draw() {
  background(160);
	textSize(20);

  textAlign(RIGHT);
  drawWords(width * 0.25);

  textAlign(CENTER);
  drawWords(width * 0.5);

  textAlign(LEFT);
  drawWords(width * 0.75);
}

function drawWords(x) {

	
  fill(0);
  text('kat', x, 80);
	text('kat', x + 20, 100);
	text('kat', x + 50, 80);
	text('kat', x + 70, 120);


  fill(65);
  text('ie', x, 150);
	text('ie', x + 20 , 170);
	text('ie', x + 50, 200);
	text('ie', x + 70 , 230);

  fill(190);
  text('ride', x, 220);
	text('ride', x + 20, 240);
	text('ride', x + 115, 220);
	text('ride', x + 90, 250);

  fill(255);
  text('out', x, 290);
	text('out', x + 20, 310);
	text('out', x + 50, 290);
	text('out', x + 90, 310);

  fill(255);
  text('out', x + 50, 320);
	text('out', x + 100, 330);
	text('out', x + 120, 360);
	text('out', x + 150, 370);
}
