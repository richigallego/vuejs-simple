import connector from '../../connector'
import Brand from '../Brand/index.vue'
import Papa from '../../../node_modules/papaparse'
export default {
  name: 'BrandsList',
  components: {
    'brand': Brand,
  },
  created() {
    connector.$on('show-brand-log', this.logBrand);
    connector.$on('set-brands', this.setBrands);
    var url = '/build/static/csv/brands.csv';
    this.loadBrands(url);
  },
  destroyed() {
    connector.$off('set-brands', this.setBrands)
    connector.$off('show-brand-log', this.logBrand)
  },
  methods: {
    loadBrands(url){
      var parsed = Papa.parse(url, {
        download: true,
        header: true,
        complete: function(results, file) {
          connector.$emit('set-brands', results.data);
        }
      });
    },
    setBrands(brands) {
      this.brands = brands;
    },
    logBrand(name){
      console.log('Click on '+name);
    }
  },
  data() {
    return {
      brands: [],
    }
  }
}
