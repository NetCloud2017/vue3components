import { createApp } from "vue";
import App from "./App.vue";

import { RunningNum } from "./components/index.js";
import '../static/common.css'
const app = createApp(App)
app.use(RunningNum);
app.mount("#app");