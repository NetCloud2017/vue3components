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
    let { key } = event;
    key = `${key}`.toLowerCase();
    // control 组合键 操作
    if (event.ctrlKey) {
      let func = actions["control"] && actions["control"][key];
      func && func();
    }
   // 阻止 浏览器 快捷键 默认事件 
    if (event.preventDefault) {
      event.stopPropagation();
      event.preventDefault();
    } else {
      e.returnValue = false;
      e.cancelBubble = true;
    }
    return false;
  },
  false
);
