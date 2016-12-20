import connector from '../../connector'
import Product from '../Product/index.vue'
import Papa from '../../../node_modules/papaparse'
export default {
  name: 'ProductList',
  components: {
    'product': Product,
  },
  created() {
    connector.$on('show-product-log', this.showProduct)
    var url = '/build/static/csv/products1.csv';
    var vm = this;
    var parsed = Papa.parse(url, {
    	download: true,
      header: true,
      complete: function(results, file) {
      	console.log("Parsing complete:", results, file);
        vm.products = results.data;
      }
    });

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
      products: [],
    }
  }
}
