//var val = 0
//
//for (x = 0; x<=10; x = x + 1 ) {
//	val = x * 10
//}
//
//console.log(val)

//while loop evaluates truth statements inside (). the block of the loop willl execute forever if true inside of (). cleaner. deconstructed instead of happening all in one set of (). 

//var starter = 10
//while (starter > 0 ) {
//console.log(starter)
//starter = starter - 1
//}

//for in loops only for objects
//
//var obby = {size: 5, weight: 400, color: 'pink'}
//
//for (x in obby) {
//	console.log(x)
//	console.log( obby[x])
//}

//forEach -- needs an array. call forEach will allow you to step thru every item of the array. neat and compact. when looping thru something you want to loop thru all the items in a collection instead of counting how many items first. 

var things = [1, 2, 3, 4, 5, 6, 'hello', 'pink', 99]

things.forEach(function(val, i) {
//	console.log(val)
	console.log(i)
})