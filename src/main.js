import { createApp } from "vue";
import App from "./App.vue";
// 关闭所有 eslint 报错；
/* eslint-disable */
import "./modules/keyboardEventControl";
import { RunningNum, Icon } from "./components/index.js";
import "../static/common.css";
import "./assets/fonts/index.css";

const app = createApp(App);
app.use(RunningNum);
app.use(Icon);
app.mount("#app");
