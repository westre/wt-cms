"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
// Bootstrap app with configured routes
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    core_1.provide(ng2_toastr_1.ToastOptions, {
        useValue: new ng2_toastr_1.ToastOptions({
            positionClass: 'toast-bottom-right',
        })
    })
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map