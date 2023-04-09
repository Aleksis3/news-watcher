import { createApp } from "vue";
import App from "./App.vue";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import router from "./router";
import PrimeVue from "primevue/config";
import { worker } from "./mocks/browser";
import "./assets/main.css";

const app = createApp(App);

worker.start();

app.use(router);
app.use(PrimeVue);
app.mount("#app");
