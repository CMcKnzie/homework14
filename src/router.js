import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealsByIngredients from './views/MealsByIngredients.vue'
import MealDetails from './views/MealDetails.vue'
import Ingredients from './views/Ingredients.vue'


  const routes = [
  { path: '/homework13/', name: 'Home', component: HomePage },
  { path: '/homework13/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/homework13/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/homework13/by-ingredient/:ingredient?', name: 'MealsByIngredients', component: MealsByIngredients },
  { path: '/homework13/meal/:id', name: 'MealDetails', component: MealDetails },
  { path: '/homework13/ingredients', name: 'Ingredients', component: Ingredients },
  { path: '/homework13/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
