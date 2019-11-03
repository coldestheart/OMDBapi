import Home from '@/pages/Home'
import Favorite from '@/pages/Favorite'

export default [
  {
    path: '*',
    component: Home
  },
  {
    path: '/favorite',
    component: Favorite
  }
]