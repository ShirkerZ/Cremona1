
import HomePage from '../pages/home.vue';
import Programs from '../pages/programs.vue';
import SchedulePage from '../pages/schedule.vue';
import MenuPage from '../pages/menu.vue';
import VideoDetails from "../components/VideoDetails.vue";
import ProgramDetails from "../components/ProgramDetails.vue";

import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/programs/',
    component: Programs,
  },
  {
    path: '/schedule/',
    component: SchedulePage,
  },
  {
    path: '/menu/',
    component: MenuPage,
  },
  {
    path: '/video/:id',
    popup: { component: VideoDetails },
  },
  {
    path: '/program/:id',
    popup: { component: ProgramDetails },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
