import VueRouter from 'vue-router';
import login from '../pages/login';
import dashboard from '../pages/dashboard';
import location_detail from '../pages/location_detail';
import locations_overview from '../pages/locations_overview';
import maintenance_overview from '../pages/maintenance';
import collect from '../pages/collect';


let routes = [
    {
        path: '/login',
        component: login,
        name: 'login',
        meta: {
            title: "Quiklease - login",
            metaTags: [
                { name: "description", content: "De inlogpagina voor QuikLease" },
                { property: "og:description", content: "De inlogpagina voor QuikLease" }
            ]
        }
    },
    {
        path: '/',
        component: dashboard,
        name: 'dashboard',
        meta: {
            title: "Quiklease - dashboard",
            requiresAuth: true,
            metaTags: [
                { name: "description", content: "dashboard" },
                { property: "og:description", content: "dashboard" }
            ]
        }
    },
    {
        path: '/dashboard',
        component: dashboard,
        name: 'dashboard',
        meta: {
            title: "Quiklease - dashboard",
            requiresAuth: true,
            metaTags: [
                { name: "description", content: "dashboard" },
                { property: "og:description", content: "dashboard" }
            ]
        }
    },
    {
        path: '/locations/:id',
        component: location_detail,
        name: 'single-location',
        meta: {
            title: "Quiklease - location",
            requiresAuth: true,
            metaTags: [
                { name: "description", content: "location" },
                { property: "og:description", content: "location" }
            ]
        }
    },
    {
        path: '/locations',
        component: locations_overview,
        name: 'locations',
        meta: {
            title: "Quiklease - locations",
            requiresAuth: true,
            metaTags: [
                { name: "description", content: "locations" },
                { property: "og:description", content: "locations" }
            ]
        }
    },
    {
        path: '/maintenance',
        component: maintenance_overview,
        name: 'maintenance',
        meta: {
            title: "Quiklease - maintenance",
            requiresAuth: true,
            metaTags: [
                { name: "description", content: "maintenance" },
                { property: "og:description", content: "maintenance" }
            ]
        }
    },
    {
        path: '/collect',
        component: collect,
        name: 'collect',
        meta: {
            title: "Quiklease - collect",
            requiresAuth: true,
            metaTags: [
                { name: "description", content: "collect" },
                { property: "og:description", content: "collect" }
            ]
        }
    },
];

const router = new VueRouter({
   routes,
   // mode: 'history'
});

export default router;