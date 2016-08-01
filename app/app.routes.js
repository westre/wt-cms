"use strict";
var router_1 = require('@angular/router');
var dashboard_routes_1 = require('./modules/dashboard/dashboard.routes');
exports.routes = dashboard_routes_1.DashboardRoutes.concat([
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