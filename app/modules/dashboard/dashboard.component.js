"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var page_service_1 = require('../../shared/page/page.service');
var module_service_1 = require('../../shared/module/module.service');
var module_entity_1 = require('../../shared/module/module.entity');
var dashboard_news_component_1 = require('./submodules/news/dashboard-news.component');
var dashboard_clock_component_1 = require('./submodules/clock/dashboard-clock.component');
var DashboardComponent = (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(pageService, moduleService) {
        _super.call(this, moduleService.getModule("DashboardComponent"));
        this.pageService = pageService;
        this.moduleService = moduleService;
        this.title = "Dashboard";
        this.pages = [
            "page1",
            "page2"
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.title += " - " + this.version;
        this.pageService.currentPage(this);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            directives: [dashboard_news_component_1.DashboardNewsComponent, dashboard_clock_component_1.DashboardClockComponent]
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, module_service_1.ModuleService])
    ], DashboardComponent);
    return DashboardComponent;
}(module_entity_1.Module));
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map