 Vue.component('paint-component', {
	template: 
	 `<tr>	
							<td>{{colorName}}</td> 
							<td><img v-bind:src="image" v-bind:alt="name"/></td> 
							<td>{{series}}</td>
							<td>{{transparency}}</td> 
							<td>{{description}}</td> 
		</tr>`,
   props: ['colorName', 'image', 'series', 'transparency', 'description']    
});

var vm = new Vue({
	el: '#app',
	data: {
		newPaintObj: {
			colorName: "",
			image: "",
			series: "",
			transparency: "",
			description: ""	
		},
		
	paints: [
	{
		colorName: "Naples Yellow",
		image: "https://krideout.studio.mcad.edu/programming-for-web/week8/8A/img/naples-yellow.png",
		series: 2,
		transparency: "Opaque",
		description: "A pale opaque earthy yellow."	
	},
									
	{	
			colorName: "Cadmium Yellow",
			image: "https://krideout.studio.mcad.edu/programming-for-web/week8/8A/img/cadmium-yellow.png",
			series: 4,
			transparency: "Opaque",
			description: "Pure medium yellow with great opacity and naturally muted tint. This chemically pure cadmium color replaced toxic chrome yellow for the Impressionists. Most useful for natural light painting."	 
	},
									
	{	
		colorName: "Raw Sienna",
		image: "https://krideout.studio.mcad.edu/programming-for-web/week8/8A/img/raw-sienna.png",
		series: 1,
		transparency: "semi-transparent",
		description:"Traditional earth yellow glazing color, originally mined in Tuscany. Consider using Gamblin Transparent Earth Yellow for more transparency."	 
	},
									
	{
		colorName: "Burnt Umber",
		image: "https://krideout.studio.mcad.edu/programming-for-web/week8/8A/img/burnt-umber.png",
		series: 1,
		transparency: "semi-transparent",
		description: "Vigorous drier due to high manganese content. Burnt Umber is useful as an underpainting drawing color. Because of high oil content, use thinly in under layers."
	},
									
	{	
		colorName: "Raw Umber",
		image:"https://krideout.studio.mcad.edu/programming-for-web/week8/8A/img/raw-umber.png",
		series: 1,
		transparency: "semi-transparent",
		description: "Vigorous drier due to high manganese content (which also gives Umbers their dark color)."
	},
									
	{	
		colorName: "Cobalt Violet",
		image: "https://krideout.studio.mcad.edu/programming-for-web/week8/8A/img/cobalt-violet.png",
		series: 6,
		transparency: "transparent",
		description: "Deep violet that is cool in its masstone (and less red than Manganese Violet), Cobalt Violet is a pure hue that cannot be mixed from other colors. Although very muted in its tint, it is a marvel as a top coat color. Cobalt Violet greys down considerably when mixed with white."
	}
]
},
	methods: {
    submitHandler: () => {
			console.log('submitted');
			vm.paints = vm.paints.concat(vm.newPaintObj);
			vm.resetForm();
		},
		resetForm: () => {	
			vm.newPaintObj = {
		"colorName": "",
		"image": "",
		"series": "",
		"transparency": "",
		"description": ""	
		};
	},
		deleteItem: item => {
			vm.paints = vm.paints.filter(paint => {
				return paint !== item;
			});
		}
	}
	
//	function mainjsfunction(vm.newPaintObj)
//{
//    console.log(vm.newPaintObj.colorName);  
//    //do something with input field value
//}
});