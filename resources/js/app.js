import "./bootstrap";

import { createApp } from "vue";
import axios from "axios";

import App from "./components/App.vue";
import Navbar from "./components/Navbar.vue";
import Resume from "./components/Resume.vue";

const app = createApp();

app.component("app", App);
app.component("navbar", Navbar);
app.component("resume", Resume);

app.mount("#app");
