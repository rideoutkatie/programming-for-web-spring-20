

Vue.component('my-art', {
	template: `<div :class="product">

<p class="product-name">{{product.name}} [{{product.year}}]</p>

<p class="product-medium">{{product.medium}}</p> 

<div class="product-image">
<a :href="product.image_page"><img :src="product.image_link" alt="product.name">
</a>
<p class="product-size">{{product.size}}</p>

</div>


	</div>`,
	props:['product']

});

var vm = new Vue({
    el: "#app",
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

