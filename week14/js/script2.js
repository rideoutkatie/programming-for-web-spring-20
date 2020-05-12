//<p class="product-name">{{product.name}}</p>
//<p class="product-size">{{product.size}}</p>
//<p class="product-medium">{{product.medium}}</p> 
Vue.component('my-art', {
	template: `<div :class="product">
<div class="product-image">
<img :src="product.image_link" alt="product.name">
</div>
<h1 class="product-year">{{product.year}}</h1>
	</div>`,
	props:['product']

});

var vm = new Vue({
    el: "#app2",
    data: {
			art: []

    },
    methods: {
        getArt: function() {
            axios.get("art.json")
				    .then(response=> {
                console.log(response);
							vm.art = response.data
            })
        }
    },
	created: function() {
		this.getArt();
	}
});

