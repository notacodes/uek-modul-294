import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import TopSecretView from "@/views/TopSecretView.vue";
import JobsView from "@/views/JobsView.vue";
import NewsView from "@/views/NewsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: AboutView,
      children: [
        {
          path: 'jobs',
          component: JobsView,
        },
        {
          path: 'news',
          component: NewsView,
        },
      ],

    },
    {
      path: '/secret',
      component: TopSecretView,
      beforeEnter: (to, from, next) => {
        const evenMinutes = isRightNowAEvenMinute();

        if (evenMinutes) {
          console.log('Zugriff erlaubt')
          next() // Navigation zulassen
        } else {
          console.log('ZUGRIFF VERWEIGERT!')
          // next() wird in diesem Fall nie aufgerufen,
          // also blockiert Vue die Navigation zur Route.
        }
      }
    }

  ]
})
function isRightNowAEvenMinute(){
  const d = new Date();
  let minutes = d.getMinutes();
  return minutes % 2 === 0
}

export default router
