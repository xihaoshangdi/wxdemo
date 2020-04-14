import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Address from "@/views/Address";
import Collection from "../views/Collection";
import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/address",
        name: "Address",
        component: Address
    },
    {
        path: "/collection",
        name: "Collection",
        component: Collection
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;
