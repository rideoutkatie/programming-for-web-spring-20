var app = new Vue ({
  el: '#app',
		data: {
				brand: 'Vue Mastery',
				product: 'Socks',
				selectedVariant: 0,
			
				details: ["80% cotton", "20% polyester", "Gender-Neutral"],

		variants: [
          {
          variantId: 2234,
          variantColor: "green",
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
          },
          {
          variantId: 2235,
          variantColor: "blue",
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
          }
      ],
    cart: 0
  },
  
  //: function not necessary... example methods()
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
			console.log(index)
    }
  },
	computed: {
		title() {
			return this.brand + ' ' + this.product
		}, 
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
	}
	}
})


