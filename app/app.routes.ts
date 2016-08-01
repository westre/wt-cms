import { provideRouter, RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    //...r1,
    //...r2
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
