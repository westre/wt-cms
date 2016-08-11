"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./modules/dashboard/dashboard.component');
var files_component_1 = require('./modules/files/files.component');
var modules_component_1 = require('./modules/modules/modules.component');
var pages_component_1 = require('./modules/pages/pages.component');
var settings_component_1 = require('./modules/settings/settings.component');
var users_component_1 = require('./modules/users/users.component');
exports.routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'files', component: files_component_1.FilesComponent },
    { path: 'modules', component: modules_component_1.ModulesComponent },
    { path: 'pages', component: pages_component_1.PagesComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map