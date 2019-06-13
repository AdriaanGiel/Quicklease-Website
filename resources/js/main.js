/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import router from './routes/routes';
import * as VueGoogleMaps from "vue2-google-maps";
import store from './store';
import middleware from './routes/middleware';


Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyB3TJYJHakiZKnM2W0q1JuqFlHzel7sKis",
        libraries: "places" // necessary for places input
    }
});

middleware(router,store);

const app = new Vue({
    el: '#app',
    router: router,
    store:store
});

// $.material.init()