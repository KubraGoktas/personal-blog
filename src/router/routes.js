import { lazy } from "react";


export const routes = [
    {
        path:'/AboutMe',
        component: lazy(()=>import('../pages/AboutMe') )
    },
    {
        path:'/MyWork',
        component: lazy(()=>import('../pages/MyWork') )
    },
    {
        path:'/Comments',
        component: lazy(()=>import('../pages/Comments') )
    },
    {
        path:'/ContactMe',
        component: lazy(()=>import('../pages/ContactMe') )
    },
    {
        path: '/',
        component: lazy(()=>import('../pages/AboutMe') )
    }
]