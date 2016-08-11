import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FilesComponent } from './modules/files/files.component';
import { ModulesComponent } from './modules/modules/modules.component';
import { PagesComponent } from './modules/pages/pages.component';
import { AddPageComponent } from './modules/pages/add-page.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { UsersComponent } from './modules/users/users.component';

export const paths: string = "WTF";

export const routes: Routes = [    
    { path: 'dashboard', component: DashboardComponent },
    { path: 'files', component: FilesComponent },
    { path: 'modules', component: ModulesComponent },

    { path: 'pages', component: PagesComponent },
    { path: 'pages/add', component: AddPageComponent },

    { path: 'settings', component: SettingsComponent },
    { path: 'users', component: UsersComponent },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, 
];

export const routing = RouterModule.forRoot(routes);
