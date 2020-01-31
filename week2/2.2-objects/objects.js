

//Create an array with your favorite games as objects inside of the array. Each game object will represent one game.
//You must have 3 or more games in the collection.
//each object will have same properties. title, type, no. of players, rating.




const myArr = [
	{title: 'scrabble', type: 'board game', numberOfplayers: 4, rating: 4},
	{title: 'apples to apples', type: 'card game', numberOfplayers: 'at least 4', rating: 4},
	{title: 'cards against humanity', type: 'card game', numberOfplayers: 'at least 4', rating: 4},
	];

//Prompt the user with a message 
let userPick = prompt('I have 3 games in my collection. Pick a number between 1 and 3, and I will tell you about that game.')


//Using the plus sign as a concatenation operator, alert the user to you game. "You selected" + myGameArray[promptResponse -1 ].title + " which is a " + myGameArray[promptResponse - 1].type + " of game..." And so forth.
console.log('You selected' + ' ' + myArr[userPick -1]);

