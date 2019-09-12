import Vue from 'vue'
import Router from 'vue-router'
import userLogin from '../components/userLogin.vue'
import  userHome from '../components/userHome.vue'
import register from '../components/register.vue'
import administratorLogin from '../components/administratorLogin.vue'
import administratorHome from '../components/administratorHome.vue'
import updatePassword from  '../components/updatePassword.vue'
import rentCar from '../components/rentCar.vue'
import myForm from  '../components/myForm.vue'
import myCar from  '../components/myCar.vue'
import addCar from '../components/addCar.vue'
import rentForm from  '../components/rentForm.vue'
import preShow from '../components/preShow.vue'
import createForm from '../components/createForm.vue'
import chooseDo from  '../components/chooseDo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/userLogin'},
    {path: '/userLogin', component: userLogin},
    {path: '/userHome', component: userHome,children:[
        {path: '/', redirect: '/userHome/rentCar'},
        {path: 'updatePassword',component: updatePassword},
        {path: 'myForm',component: myForm},
        {path: 'rentCar',component: rentCar, children:[{path: 'createForm', component: createForm}]}
      ]},
    {path: '/register', component: register},
    {path: '/administratorLogin', component: administratorLogin},
    {path: '/administratorHome', component: administratorHome,children:[
        {path: '/', redirect: '/administratorHome/myCar'},
        {path: 'myCar',component: myCar, children:[{path: 'chooseDo',component: chooseDo}]},
        {path: 'addCar',component: addCar, children:[{path: 'preShow', component: preShow}]},
        {path: 'rentForm',component: rentForm}
      ]}
  ]
})
