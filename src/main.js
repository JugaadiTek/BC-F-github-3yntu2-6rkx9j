import "./stylesheet/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "modern-normalize";

console.log("=======================================\n=====    MAIN MAIN.JS HANDLER    ======\n=======================================")

const app = createApp(App);

app.use(router);

app.mount("#app");
