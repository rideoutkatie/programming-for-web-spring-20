var paintArray = [{
		"colorName": "Naples Yellow",
		"paintColor": "will be paint swatch images",
		"series":2,
		"transparency": "Opaque",
		"description":"A pale opaque earthy yellow."	
	},
	{	"colorName": "Cadmium Yellow",
	  "paintColor": "will be paint swatch images",
		"series":4,
		"transparency": "Opaque",
		"series":1,
		"description":"Cadmium Yellow Medium: Pure medium yellow with great opacity and naturally muted tint. This chemically pure cadmium color replaced toxic chrome yellow for the Impressionists. Most useful for natural light painting."	 
	},
	{	"colorName": "Raw Sienna",
		"paintColor": "will be paint swatch images",
		"series":1,
		"transparency": "semi-transparent",
		"description":"Traditional earth yellow glazing color, originally mined in Tuscany. Consider using Gamblin Transparent Earth Yellow for more transparency."	 
	},
	{"colorName": "Burnt Umber",
	 "paintColor": "will be paint swatch images",
		"series":1,
		"transparency": "semi-transparent",
	 	"description":"Burnt Umber: Vigorous drier due to high manganese content. Burnt Umber is useful as an underpainting drawing color. Because of high oil content, use thinly in under layers."
	},
	{	"colorName": "Raw Umber",
	  "paintColor": "will be paint swatch images",
		"series":1,
		"transparency": "semi-transparent",
		"description":"Vigorous drier due to high manganese content (which also gives Umbers their dark color)."
	},
	{	"colorName": "Cobalt Violet",
	  "paintColor": "will be paint swatch images",
		"series":6,
		"transparency": "transparent",
		"description":"Deep violet that is cool in its masstone (and less red than Manganese Violet), Cobalt Violet is a pure hue that cannot be mixed from other colors. Although very muted in its tint, it is a marvel as a top coat color. Cobalt Violet greys down considerably when mixed with white."
	}];
	var vm = new Vue({
		el: "#app",
		data: {
			paints: paintArray
	}
});