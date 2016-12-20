import Vue from 'vue'
import AppComponent from './App/index.vue'
import Papa from '../node_modules/papaparse'

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: h => h('app'),
})
