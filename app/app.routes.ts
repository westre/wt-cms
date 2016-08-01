import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './modules/dashboard/dashboard.routes';

export const routes: RouterConfig = [    
    ...DashboardRoutes,
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, 
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
