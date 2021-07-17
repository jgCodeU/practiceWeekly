import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import navigation from '@/details/navigation/navigation'
import baseConversion from '@/details/baseConversion/baseConversion'
import rgbToGray from '@/details/rgbToGray/rgbToGray'
import calculate from '@/details/calculate/calculate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/baseConversion',
      name: 'baseConversion',
      component: baseConversion
    },
    {
      path: '/rgbToGray',
      name: 'rgbToGray',
      component: rgbToGray
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: calculate
    }
  ]
})
