// Add your code here
//var vm = new Vue({
//  el:"#app",
//		
//  data: {
//    myNumbers: [1, 2, 3, 4, 5],
//		animals:[
//			{name: "panda", color:"black"},
//			{name:"dog", color:"brown"},
//			{name:"frog", color:"green"}
//		],
//		myDog: {
//			name:"Harvey",
//			breed:"shih tzu",
//			color:"red",
//			weight:"13"
//			
//	}
//  }
	var myTodos = [{
		"userID": 1,
		"id": 1, 
		"title": "mr. roboto",
		"completed": false
	},
	{
		"userID": 1,
		"id": 2,
		"title": "mr. jeckle",
		"completed": false
	},
	{
		"userID":1,
		"id": 3,
		"title": "snow white",
		"completed": true
}							 
];

var vm = new Vue({
			el: "#app",
			data: {
					todos: myTodos
		}
	});

