import connector from '../../connector'
import Product from '../Product/index.vue'

export default {
  name: 'ProductList',
  components: {
    'product': Product,
  },
  created() {
    connector.$on('show-product-log', this.showProduct)
  },
  destroyed() {
    connector.$off('show-product-log', this.showProduct)
  },
  methods: {
    showProduct(name) {
      console.log('Show Product '+name);
    }
  },
  data() {
    return {
      products: [
        {name:'product 1',image: 'http://lorempixel.com/100/100/nightlife/1'},
        {name:'product 2',image: 'http://lorempixel.com/100/100/nightlife/2'},
        {name:'product 3',image: 'http://lorempixel.com/100/100/nightlife/3'}
      ],
    }
  }
}
