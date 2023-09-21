import { createApp } from "vue";
import App from "./App.vue";
import "../static/common.css";
import "./assets/fonts/index.css";
// 关闭所有 eslint 报错；
/* eslint-disable */
const app = createApp(App);
import "./modules/keyboardEventControl";

import CustomComponent from "./components";
// app.use(CustomComponent, {components: ['xxxx']});
// document.requestFullscreen();
app.use(CustomComponent);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

import { router } from "./router";
app.use(router);

app.mount("#app");
