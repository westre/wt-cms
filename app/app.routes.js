"use strict";
var router_1 = require('@angular/router');
var dashboard_routes_1 = require('./modules/dashboard/dashboard.routes');
var files_routes_1 = require('./modules/files/files.routes');
var modules_routes_1 = require('./modules/modules/modules.routes');
var pages_routes_1 = require('./modules/pages/pages.routes');
var settings_routes_1 = require('./modules/settings/settings.routes');
var users_routes_1 = require('./modules/users/users.routes');
exports.routes = dashboard_routes_1.DashboardRoutes.concat(files_routes_1.FilesRoutes, modules_routes_1.ModulesRoutes, pages_routes_1.PagesRoutes, settings_routes_1.SettingsRoutes, users_routes_1.UsersRoutes, [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
]);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map