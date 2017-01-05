import BrandsList from '../components/BrandsList/index.vue'
import ProductList from '../components/ProductList/index.vue'

export default {
  name: 'App',
  components: {
    'product-list': ProductList,
    'brands-list': BrandsList
  },
  data() {
    return {}
  },
}
