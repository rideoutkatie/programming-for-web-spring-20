var accordian;
var bird;
var crying;
var drawing;
var glass;
var musicBox;
var tibetanBells;
var dialTone;
var drawer;
var textAlert;

function preload(){
  accordian = loadSound('sound/accordian.wav');
	bird = loadSound('sound/cartoon-bird.wav');
	crying = loadSound('sound/crying.wav');
	drawing = loadSound('sound/fast-drawing.wav');
	glass = loadSound('sound/glass-ping.wav');
	musicBox = loadSound('sound/music-box.wav');
	tibetanBells = loadSound('sound/tibetan-bells.wav');
	dialTone = loadSound('sound/dial-tone.wav');
	drawer = loadSound('sound/drawer.wav');
	textAlert = loadSound('sound/text-alert.wav');
}

function setup() {
  let cnv = createCanvas();
  amplitude = new p5.Amplitude();
}

function draw() {
  background(220, 150);


  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
}

function keyTyped () {
  if (key === '1') {
    accordian.play();
  } else if (key === '2') {
    bird.play();
  } else if (key === '3') {
    crying.play();
  } else if (key === '4') {
    drawing.play();
  } else if (key === '5') {
    glass.play();
  } else if (key === '6') {
    musicBox.play();
  } else if (key === '7') {
    tibetanBells.play();
  } else if (key === '8') {
    dialTone.play();
  } else if (key === '9') {
    drawer.play();
  } else if (key === '0') {
    textAlert.play();

}
}