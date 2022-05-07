import { createApp } from "vue";
import App from "./App.vue";
import "../static/common.css";
import "./assets/fonts/index.css";
// 关闭所有 eslint 报错；
/* eslint-disable */
const app = createApp(App);
import "./modules/keyboardEventControl";

import {
  RunningNum,
  Icon,
  AInput,
  UnusualContract,
  AForm
} from "./components/index.js";
app.use(RunningNum);
app.use(Icon);
app.use(UnusualContract);
app.use(AInput);
app.use(AForm);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

import { router } from "./router";
app.use(router);

app.mount("#app");
