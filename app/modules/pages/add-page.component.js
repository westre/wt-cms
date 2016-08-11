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
var ng2_ckeditor_1 = require('ng2-ckeditor');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var AddPageComponent = (function (_super) {
    __extends(AddPageComponent, _super);
    function AddPageComponent(pageService, moduleService, dragulaService, toastrService) {
        _super.call(this, moduleService.getModule("PagesComponent"));
        this.pageService = pageService;
        this.moduleService = moduleService;
        this.dragulaService = dragulaService;
        this.toastrService = toastrService;
        this.title = "Paginabeheer - tt";
        this.pages = [
            new subnavigation_entity_1.SubNavigation("pages/", "Paginaoverzicht", false),
            new subnavigation_entity_1.SubNavigation("pages/add", "Pagina toevoegen", true)
        ];
    }
    AddPageComponent.prototype.ngOnInit = function () {
        this.pageService.currentPage(this);
    };
    AddPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-page',
            templateUrl: 'add-page.component.html',
            styleUrls: ['add-page.component.css'],
            directives: [ng2_ckeditor_1.CKEditor, ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            providers: [ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, module_service_1.ModuleService, ng2_dragula_1.DragulaService, ng2_toastr_1.ToastsManager])
    ], AddPageComponent);
    return AddPageComponent;
}(module_entity_1.Module));
exports.AddPageComponent = AddPageComponent;
//# sourceMappingURL=add-page.component.js.map