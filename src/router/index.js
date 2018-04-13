import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List.vue'
import Add from '../components/Add.vue'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/list',
      name: 'list',
      component: List
  }, {
    path: '/add',
    name: 'add',
    component: Add
  }]
})
