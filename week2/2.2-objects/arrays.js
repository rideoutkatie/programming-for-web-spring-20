//MY fave movies
const myArr = ['Green Book', 'LALA Land', 'Home Alone', 'A Star is Born', 'Three Billboards'];
console.log(myArr);

//Prompt User
let userArr = prompt('What is your most favorite movie?');
console.log(userArr);

//adds user's favorite movie to the end of my list
myArr.push(userArr);

//displays userArr to end of myArr
console.log(myArr.toString());