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
var web_page_entity_1 = require('../../shared/web-page/web-page.entity');
var PagesComponent = (function (_super) {
    __extends(PagesComponent, _super);
    function PagesComponent(pageService, moduleService, dragulaService, toastrService) {
        var _this = this;
        _super.call(this, moduleService.getModule("PagesComponent"));
        this.pageService = pageService;
        this.moduleService = moduleService;
        this.dragulaService = dragulaService;
        this.toastrService = toastrService;
        this.title = "Paginabeheer";
        this.pages = [
            new subnavigation_entity_1.SubNavigation("pages/", "Paginaoverzicht", true),
            new subnavigation_entity_1.SubNavigation("pages/add", "Pagina toevoegen", false)
        ];
        this.webPages = [
            new web_page_entity_1.WebPage("w1"),
            new web_page_entity_1.WebPage("w2"),
            new web_page_entity_1.WebPage("w3"),
            new web_page_entity_1.WebPage("w4"),
        ];
        // test
        this.webPages[1].isHomePage = true;
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
    }
    PagesComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        console.log(e.id);
        var webPage = this.webPages[e.id];
        this.toastrService.success("Pagina succesvol van volgorde veranderd", webPage.title);
    };
    PagesComponent.prototype.ngOnInit = function () {
        this.pageService.currentPage(this);
    };
    PagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pages',
            templateUrl: 'pages.component.html',
            styleUrls: ['pages.component.css'],
            directives: [ng2_ckeditor_1.CKEditor, ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService]
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, module_service_1.ModuleService, ng2_dragula_1.DragulaService, ng2_toastr_1.ToastsManager])
    ], PagesComponent);
    return PagesComponent;
}(module_entity_1.Module));
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map