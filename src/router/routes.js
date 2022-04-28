import App from "../App.vue";
import Help from "../help/HelpCenter.vue";
import NavigatorCenter from "../navigatorCenter/NavigatorCenter.vue";
export const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/help",
    component: Help,
  },
  {
    path: "/navigatorCenter",
    component: NavigatorCenter,
  },
];
