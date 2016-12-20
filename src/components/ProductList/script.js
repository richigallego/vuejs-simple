import connector from '../../connector'
import Product from '../Product/index.vue'
import Papa from '../../../node_modules/papaparse'
export default {
  name: 'ProductList',
  components: {
    'product': Product,
  },
  created() {
    connector.$on('get-products', this.getProducts);
    var url = '/build/static/csv/products1.csv';
    var parsed = Papa.parse(url, {
      download: true,
      header: true,
      complete: function(results, file) {
        connector.$emit('get-products', results.data);
      }
    });
  },
  destroyed() {
    connector.$off('get-products', this.showProduct)
  },
  methods: {
    getProducts(products) {
      this.products = products;
    }
  },
  data() {
    return {
      products: [],
    }
  }
}
