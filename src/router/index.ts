import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "@/components/home-page/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/edit-workout/:workoutId(\\d+)",
    name: "EditWorkout",
    component: () =>
      import(
        /* webpackChunkName: "edit-workout" */ "@/components/edit-page/EditWorkout.vue"
      ), //lazy loaded
    props: ({ params }) => ({
      workoutId: Number.parseInt(params.workoutId, 10) || 0
    })
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/components/NotFound.vue") //lazy loaded
  }
];

const router = new VueRouter({
  routes
});

export default router;
