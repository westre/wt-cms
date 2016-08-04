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
var submodule_entity_1 = require('../../../../shared/module/submodule.entity');
var module_service_1 = require('../../../../shared/module/module.service');
var DashboardNewsComponent = (function (_super) {
    __extends(DashboardNewsComponent, _super);
    function DashboardNewsComponent(moduleService) {
        _super.call(this, "DashboardNewsComponent", "v0.1", "null", moduleService.getModule("DashboardComponent"));
        this.moduleService = moduleService;
    }
    DashboardNewsComponent.prototype.ngOnInit = function () {
        console.log("Beep, boop!");
        console.log("My parent is: " + this.parentModule.name);
    };
    DashboardNewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard-news',
            templateUrl: 'dashboard-news.component.html',
            styleUrls: ['dashboard-news.component.css']
        }), 
        __metadata('design:paramtypes', [module_service_1.ModuleService])
    ], DashboardNewsComponent);
    return DashboardNewsComponent;
}(submodule_entity_1.SubModule));
exports.DashboardNewsComponent = DashboardNewsComponent;
//# sourceMappingURL=dashboard-news.component.js.map