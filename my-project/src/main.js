import { createApp } from "vue";
import App from "./App.vue";
import TheHome from "./components/TheHome.vue";
import ThePortfolio from "./components/ThePortfolio.vue";
import TheContact from "./components/TheContact.vue";
import TheAbout from "./components/TheAbout.vue";

import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/portfolio", component: ThePortfolio },
    { path: "/about", component: TheAbout },
    { path: "/contact", component: TheContact },
  ],
});

app.use(router);

app.mount("#app");
