import connector from '../../connector'
import Product from '../Product/index.vue'
import Papa from '../../../node_modules/papaparse'
export default {
  name: 'ProductList',
  components: {
    'product': Product,
  },
  created() {
    connector.$on('show-product-log', this.logProduct);
    connector.$on('set-products', this.setProducts);
    connector.$on('load-products', this.loadProducts);
  },
  destroyed() {
    connector.$off('set-products', this.setProducts)
    connector.$off('show-product-log', this.logProduct)
  },
  methods: {
    loadProducts(url){
      var path = '/build/static/csv/';
      var parsed = Papa.parse(path+url, {
        download: true,
        header: true,
        complete: function(results, file) {
          connector.$emit('set-products', results.data);
        }
      });
    },
    setProducts(products) {
      this.products = products;
    },
    logProduct(name){
      console.log('Click on '+name);
    }
  },
  data() {
    return {
      products: [],
    }
  }
}
