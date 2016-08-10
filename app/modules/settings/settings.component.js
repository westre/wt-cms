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
var page_service_1 = require('../../shared/page/page.service');
var subnavigation_entity_1 = require('../../shared/sub-navigation/subnavigation.entity');
var SettingsComponent = (function () {
    function SettingsComponent(pageService) {
        this.pageService = pageService;
        this.title = "settings";
        this.pages = [
            new subnavigation_entity_1.SubNavigation("index", "Index"),
            new subnavigation_entity_1.SubNavigation("info", "Informatie")
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.pageService.currentPage(this);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'settings',
            templateUrl: 'settings.component.html',
            styleUrls: ['settings.component.css']
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map