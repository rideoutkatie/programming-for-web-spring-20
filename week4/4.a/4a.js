const cardWidth = 120;
const cardHeight = 200;
//let circleX = 200;
//let circleY = 300;
//let startingX = 200;
//let startingY = 100;
//let startingID = 0;

//let myCircles = [];
function setup () {
	createCanvas(1000,500);
	background(255);
	stroke(1);
	
	//ellipse(circleX, circleY, circleDiameter);
		//for (let k = 0; k < 2; k++) {
		//for (let i = 0; i < 4; i++) {
			//ellipse(startingX, startingY, circleDiameter);
		//myCircles.push({ x: startingX, y: startingY, id: startingID });
		//startingX += 150;
		//startingID++;
	//}
			//startingY += 150;
			//startingX = 200;
	//}

		//console.log(myCircles);
	}
 function draw (){
	 for (let i = 50; i < 1000; i += 150){
					 rect(i, 50, cardWidth, cardHeight);
					 rect(i, 300, cardWidth, cardHeight);
	 }
	 
 }
//function mousePressed(){
	//for(let j = 0; j < myCircles.length; j++) {
			//let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
			//if (distance < circleDiameter / 2) {
				//console.log('circle has be clicked', myCircles[j].id);
	//}
	
	//console.log('mouse pressed', mouseX, mouseY);	
	//if(mouseX> rectX && mouseY < rectX + rectWidth && mouseY > 100  && mouseY < 300) {
		//console.log('square has been hit');
	
//}}
