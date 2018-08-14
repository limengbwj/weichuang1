import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

import Book from '@/views/book/Book.vue'
import Music from '@/views/music/Music.vue'
import Photo from '@/views/photo/Photo.vue'
import Movie from '@/views/movie/Movie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home
      redirect:'/movie'
    },
    {
      path: '/movie',
      name: 'movie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component:Movie
    },{
      path: '/music',
      name: 'music',
      component:Music
    },{
      path: '/book',
      name: 'book',
      component:Book
    },{
      path: '/photo',
      name: 'photo',
      component:Photo
    }
    
  ],
});
