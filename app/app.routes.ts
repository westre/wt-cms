import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './modules/dashboard/dashboard.routes';
import { FilesRoutes } from './modules/files/files.routes';
import { ModulesRoutes } from './modules/modules/modules.routes';
import { PagesRoutes } from './modules/pages/pages.routes';
import { SettingsRoutes } from './modules/settings/settings.routes';
import { UsersRoutes } from './modules/users/users.routes';

export const routes: RouterConfig = [    
    ...DashboardRoutes,
    ...FilesRoutes,
    ...ModulesRoutes,
    ...PagesRoutes,
    ...SettingsRoutes,
    ...UsersRoutes,
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, 
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
