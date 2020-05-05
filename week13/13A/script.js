function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);
  rotateY(frameCount * 0.01);

  for (let k = 0; k < 5; k++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + k) * 10,
        sin(frameCount * 0.001 + k) * 10,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      point(8, 10);

    
      pop();
    }
    pop();
  }
}
