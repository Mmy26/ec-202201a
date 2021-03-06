import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "*",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/cartList",
    component: () => import("../views/CartList.vue"),
  },
  {
    path: "/itemList",
    component: () => import("../views/ItemList.vue"),
  },
  {
    path: "/itemDetail/:id",
    // redirect: () => {
    //   const ItemId=this.$store.getters.getItemId
    //   if (  ItemId>= 39 && ItemId <= 20) {
    //     return { path: "/itemDetail/:id" };
    //   } else {
    //     return { path: "/error" };
    //   }
    // },
    component: () => import("../views/ItemDetail2.vue"),
  },

  {
    path: "/registerUser",
    component: () => import("../views/registerUser.vue"),
  },
  {
    path: "/logout",

    component: () => import("../views/Logout.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/orderConfirm",
    component: () => import("../views/OrderConfirm.vue"),
  },
  {
    path: "/faq",
    component: () => import("../views/Faq.vue"),
  },
  {
    path: "/orderFinished",
    component: () => import("../views/OrderFinished.vue"),
  },
  {
    path: "/orderHistory",
    component: () => import("../views/OrderHistory.vue"),
  },
  {
    path: "*",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
