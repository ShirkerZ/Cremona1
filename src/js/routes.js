
import HomePage from '../pages/home.vue';
import Programs from '../pages/programs.vue';
import SchedulePage from '../pages/schedule.vue';
import MenuPage from '../pages/menu.vue';
import VideoDetails from "../components/VideoDetails.vue";
import ProgramDetails from "../components/ProgramDetails.vue";

import RequestAndLoad from '../pages/request-and-load.vue';
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
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
