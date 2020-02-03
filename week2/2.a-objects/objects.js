
const myQuiz= [
	
	{question: 'Who is the second most nominated person in Academy Awards history behind Walt Disney?', answer: 'John Williams (composer)'},
	{question: 'Which film director has John Williams composed the most original scores for?', answer: 'Steven Spielberg'}
	
];

const myRandomIndex = myQuiz[Math.round(Math.random() * myQuiz.Length - 1)];
let userAnswer = prompt(myRandomIndex.question, '');
window.alert('Your answer was' + ' ' + userAnswer + '. ' + 'The correct answer is' + ' ' + myRandomIndex.answer + '. ')
