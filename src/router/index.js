import { createRouter, createWebHistory } from "vue-router";
import Sheet from "../components/pages/energySheet/Sheet.vue";

import newSitesInsert from "../components/pages/sites/newSitesInsert.vue";
import newSiteInsert from "../components/pages/sites/newSiteInsert.vue";
import login from "../components/pages/User/login.vue";
import register from "../components/pages/User/register.vue";
import home from "../components/home.vue";
import resetPassword from "../components/pages/User/resetPassword.vue";
import unauthorized from "../components/unauthorized.vue";
import nurIndex from "../components/pages/NUR/nurIndex.vue";
import NUR2G from "../components/pages/NUR/NUR2G.vue";
import NUR3G from "../components/pages/NUR/NUR3G.vue";
import NUR4G from "../components/pages/NUR/NUR4G.vue";
import NURStatestics from "../components/pages/NUR/NURStatestics.vue";
import cascades from "../components/pages/sites/cascades.vue";
import nodals from "../components/pages/sites/nodals.vue";
import modifications from "../components/pages/Modifications/modifications.vue";
import modificationsIndex from "../components/pages/Modifications/modificationsIndex.vue";
import energyIndex from "../components/pages/energySheet/energyIndex.vue";
import Details from "../components/pages/sites/Details.vue";
import CascadesUpdate from "../components/pages/sites/CascadesUpdate.vue";
import SiteModifications from "../components/pages/Modifications/SiteModifications.vue";
import NewModification from "../components/pages/Modifications/NewModification.vue";
import UpdateModification from "../components/pages/Modifications/UpdateModification.vue";
import dashboard from "../components/pages/dashboard.vue";
import NUR from "../components/pages/NUR/NUR.vue";
import energy from "../components/pages/energySheet/energy.vue";
import sites from "../components/pages/sites/sites.vue";
import users from "../components/pages/User/users.vue";
import siteUpdate from "../components/pages/sites/siteUpdate.vue";
import energyStatestics from "../components/pages/energySheet/energyStatestics.vue";
import notFound from "../components/notFound.vue";
import store from "../vuex/store";
import validateToken from "../components/pages/User/validateToken.vue";
import TheWelcome from "../components/TheWelcome.vue";

const routes = [
  {
    path: "/energy/sheet",
    component: Sheet,
    meta: { requiresAuth: true, requiresSuperAdmin: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  { path: "/energy", component: energy, meta: { requiresAuth: true } },
  {
    path: "/energy/index",
    component: energyIndex,
    meta: { requiresAuth: true },
  },
  {
    path: "/energy/statestics/:week/:year",
    component: energyStatestics,
    props: true,
    meta: { requiresAuth: true },
  },
  
  {
    path: "/modifications/index/:columnName/:columnValue",
    component: modificationsIndex,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/modifications/new/:site_code/:site_name",
    component: NewModification,
    props: true,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/modifications/update/:id",
    component: UpdateModification,
    props: true,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/modifications",
    component: modifications,
    meta: { requiresAuth: true},
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/modifications/sitemodifications/:site_code/:site_name",
    component: SiteModifications,
    props: true,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin || store.getters.isAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  { path: "/sites", component: sites, meta: { requiresAuth: true } },
  {
    path: "/sites/details/:site_code",
    component: Details,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/sites/cascades",
    component: cascades,
    meta: { requiresAuth: true},
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin || store.getters.isAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/sites/storeSites",
    component: newSitesInsert,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin || store.getters.isAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/sites/storeSite",
    component: newSiteInsert,
    meta: { requiresAuth: true},
    name:"storeSite",
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin || store.getters.isAdmin)
        {
       
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    }
  },
  {
    path: "/sites/update/:siteCode",
    component: siteUpdate,
    props: true,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin || store.getters.isAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/sites/nodals",
    component: nodals,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin || store.getters.isAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/sites/cascades/update/:site_code",
    component: CascadesUpdate,
    props: true,
    
    meta:{requiresSuperAdmin: true, requiresAdmin: true},
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin || store.getters.isAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  
  { path: "/nur", component: NUR, meta: { requiresAuth: true } },
  { path: "/nur/index", component: nurIndex, meta: { requiresAuth: true } },
  {
    path: "/nur/statestics/:week/:year",
    component: NURStatestics,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/nur/2G",
    component: NUR2G,
    meta: { requiresAuth: true, requiresSuperAdmin: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/nur/3G",
    component: NUR3G,
    meta: { requiresAuth: true, requiresSuperAdmin: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/nur/4G",
    component: NUR4G,
    meta: { requiresAuth: true, requiresSuperAdmin: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  { path: "/", redirect: "/welcome" },
  { path: "/welcome", component: TheWelcome, meta: { hideNavbar: true } },
  {
    path: "/home",
    component: home,
    name: "home",
    meta: { requiresAuth: true },
  },
  { path: "/:pathMatch(.*)*", component: notFound, meta: { hideNavbar: true },name:"notFound" },
  {
    path: "/users",
    component: users,
    meta: { requiresAuth: true, requiresSuperAdmin: true },
    beforeEnter: (to, from, next) => {
        if(store.getters.isSuperAdmin)
        {
            next();

        }
        else{
            next({name:"unauthorized"});

        }
     
    },
  },
  {
    path: "/user/login",
    component: login,
    name: "login",
    meta: { hideNavbar: true },
    beforeEnter: (to, from, next) => {
      if(store.getters.isLogin)
      {
        next({name:"notFound"});
         

      }
      else{
        next();
         

      }
   
  },
  },
  {
    path: "/user/:token",
    component: validateToken,
    name: "validateToken",
    props: true,
    meta: { hideNavbar: true },
    beforeEnter: (to, from, next) => {
      if(store.getters.isLogin)
      {
        next({name:"notFound"});
         

      }
      else{
        next();
         

      }
   
  },
  },
  {
    path: "/user/register",
    component: register,
    meta: { hideNavbar: true },
    beforeEnter: (to, from, next) => {
      if(store.getters.isLogin)
      {
        next({name:"notFound"});
         

      }
      else{
        next();
         

      }
   
  },
  },
  {
    path: "/user/resetpassword",
    component: resetPassword,
    meta: { hideNavbar: true },
    beforeEnter: (to, from, next) => {
      if(store.getters.isLogin)
      {
        next({name:"notFound"});
         

      }
      else{
        next();
         

      }
   
  },
  },
  {
    path: "/unauthorized",
    component: unauthorized,
    meta: { hideNavbar: true },
    name: "unauthorized",
    beforeEnter: (to, from, next) => {
      if(!store.getters.isLogin)
      {
        next({name:"notFound"});
         

      }
      else{
        next();
         

      }
   
  },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isLogin) {
    next({ name: "login" });
  } else {
    next();
  }
  
});

export default router;
