import Home from "../home/HomePage.vue";
import Help from "../help/HelpCenter.vue";
import NavigatorCenter from "../navigatorCenter/NavigatorCenter.vue";
import FeedBack from '../feedback/FeedBack.vue'

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/help",
    component: Help,
  },
  {
    path: "/navigatorCenter",
    component: NavigatorCenter,
  },
  {
    path: '/advice',
    component: FeedBack
  }
];
