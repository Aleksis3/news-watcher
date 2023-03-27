import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueIframe from "vue-iframes";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueIframe);

app.mount("#app");
