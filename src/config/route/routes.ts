import { lazy } from "react";


export const routes = [
    {
        path: '/',
        element: lazy(() => import('@/pages/index')),
        layout: 'navbar'
    },
    {
        path: '*',
        element: lazy(() => import('@/pages/error/404')),
        layout: 'sidebar'
    }
]