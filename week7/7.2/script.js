// Add your code here
var vm = new Vue({
  el:"#app",
  data: {
    myNumbers: [1, 2, 3, 4, 5],
		animals:[
			{name: "panda", color:"black"},
			{name:"dog", color:"brown"},
			{name:"frog", color:"green"}
		],
		myDog: {
			name:"Harvey",
			breed:"shih tzu",
			color:"red",
			weight:"13"
			
	}
  }
})
