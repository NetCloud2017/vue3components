import { createApp } from "vue";
import App from "./App.vue";
// 关闭所有 eslint 报错；
/* eslint-disable */
import { RunningNum } from "./components/index.js";
import "../static/common.css";
import { actions } from "./keyValActions";
const app = createApp(App);
app.use(RunningNum);
app.mount("#app");
document.addEventListener(
  "keydown",
  function (event) {
    console.log(event, "asdf");
    let { key } = event;
    key = `${key}`.toLowerCase();

    if (event.ctrlkey) {
      let func = actions[key];
      func && func();
    }
  },
  false
);
