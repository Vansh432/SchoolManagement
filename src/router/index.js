import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Sponsor from '../components/Sponsor.vue'
import State from '../components/State.vue'
import District from '../components/District.vue'
import SchoolPage from '../components/SchoolPage.vue'
import Event from '../components/Event.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },{
    path:'/Sponsors',
    name:'Sponsors',
    component:Sponsor
  },
  {
    path:'/statpage',
    name:'statpage',
    component:State
  },{
    path:'/districtlist',
    name:'districtlist',
    component:District
  },{
    path: '/school/:id',
    name: 'SchoolDetails',
    component:SchoolPage
  },
  {
    path: '/event',
    name: 'event',
    component:Event
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
