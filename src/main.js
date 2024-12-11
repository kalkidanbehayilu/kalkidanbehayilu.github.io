import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import BackToTop from "vue-backtotop";
import VueCodeHighlight from "vue-code-highlight";
import VueSocialSharing from "vue-social-sharing";
import store from "./store";
import VueGtag from 'vue-gtag';

const feather = require("feather-icons");
feather.replace();

createApp(App)
  .use(store)
  .use(router)
  .use(BackToTop)
  .use(VueCodeHighlight)
  .use(VueSocialSharing)
  .use(VueGtag, {
    config: { id: process.env.G_TRACKING_NUMBER},
  })
  .mount("#app");

const appTheme = localStorage.getItem("theme");

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
  appTheme === "dark" &&
  document.querySelector("body").classList.contains("app-theme")
) {
  document.querySelector("body").classList.add("bg-primary-dark");
} else {
  document.querySelector("body").classList.add("bg-secondary-light");
}
