import connector from '../../connector'

export default {
  name: 'Brand',
  props: ['data'],
  created(){
     console.log(this.data.name)
  },
  methods: {
    clickAdd(event) {
      connector.$emit('show-brand-log', this.data.name);
      connector.$emit('load-products', this.data.file);
    }
  },
  data() {
    return {}
  }
}
