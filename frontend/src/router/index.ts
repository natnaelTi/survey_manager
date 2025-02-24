import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SurveyBuilder from '../views/SurveyBuilder.vue'
import SurveyList from '../views/SurveyList.vue'
import SurveyPreview from '../views/SurveyPreview.vue'
import ResponseAnalytics from '../views/ResponseAnalytics.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/builder',
      name: 'builder',
      component: SurveyBuilder
    },
    {
      path: '/surveys',
      name: 'surveys',
      component: SurveyList
    },
    {
      path: '/preview/:id',
      name: 'preview',
      component: SurveyPreview
    },
    {
      path: '/analytics/:id',
      name: 'analytics',
      component: ResponseAnalytics
    }
  ]
})

export default router