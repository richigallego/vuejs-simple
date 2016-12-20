import connector from '../../connector'

export default {
  name: 'Product',
  props: ['data'],
  methods: {
    clickAdd(event) {
      connector.$emit('show-product-log', this.data.title);
    }
  },
  data() {
    return {}
  }
}
