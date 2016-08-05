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
var subnavigation_entity_1 = require('../../shared/sub-navigation/subnavigation.entity');
var PagesComponent = (function (_super) {
    __extends(PagesComponent, _super);
    function PagesComponent(pageService, moduleService) {
        _super.call(this, moduleService.getModule("PagesComponent"));
        this.pageService = pageService;
        this.moduleService = moduleService;
        this.title = "Paginabeheer";
        this.pages = [
            new subnavigation_entity_1.SubNavigation("overview", "Paginaoverzicht"),
            new subnavigation_entity_1.SubNavigation("add", "Nieuwe pagina toevoegen")
        ];
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.pageService.currentPage(this);
    };
    PagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pages',
            templateUrl: 'pages.component.html',
            styleUrls: ['pages.component.css']
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, module_service_1.ModuleService])
    ], PagesComponent);
    return PagesComponent;
}(module_entity_1.Module));
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map