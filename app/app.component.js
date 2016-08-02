"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var header_component_1 = require('./shared/header/header.component');
var footer_component_1 = require('./shared/footer/footer.component');
var module_service_1 = require('./shared/module/module.service');
var page_service_1 = require('./shared/page/page.service');
var AppComponent = (function () {
    function AppComponent(router, moduleService, pageService) {
        var _this = this;
        this.router = router;
        this.moduleService = moduleService;
        this.pageService = pageService;
        pageService.pageChanged$.subscribe(function (page) {
            _this.headerComponent.setTitle(page.title);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var systemModules = this.moduleService.getModules();
        for (var _i = 0, systemModules_1 = systemModules; _i < systemModules_1.length; _i++) {
            var systemModule = systemModules_1[_i];
            this.headerComponent.getNavigation().addModule(systemModule.module);
        }
    };
    __decorate([
        core_1.ViewChild(header_component_1.HeaderComponent), 
        __metadata('design:type', header_component_1.HeaderComponent)
    ], AppComponent.prototype, "headerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wt-cms',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            providers: [module_service_1.ModuleService, page_service_1.PageService]
        }), 
        __metadata('design:paramtypes', [router_2.Router, module_service_1.ModuleService, page_service_1.PageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map