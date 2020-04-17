Vue.component('my-make-up', {
	template: `<div :class="product">
			<div class="product-image"><img :src="product.api_featured_image" alt="product.name"></div>
			<h3>{{product.name}}</h3>
			<h4>{{product.brand}}</h4>


      </div>


	</div>`,
	props:['product']

});
//var baseURL = "http://makeup-api.herokuapp.com";
var vm = new Vue({
    el: "#app",
    data: {
			makeUp: []

    },
    methods: {
        getMakeUp: function() {
            axios
//							.get( "http://makeup-api.herokuapp.com/api/v1/products.json")
							.get("make-up.json")
							.then(response=> {
                console.log(response);
							vm.makeUp = response.data
            })
        }
    },
	created: function() {
		this.getMakeUp();
	}
});