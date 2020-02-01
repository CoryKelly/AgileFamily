import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/Home.vue";
import AddTask from "../components/pages/AddTask.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/AddTask",
    name: "AddTask",
    component: AddTask
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
