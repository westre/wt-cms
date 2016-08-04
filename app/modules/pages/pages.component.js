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
var PagesComponent = (function () {
    function PagesComponent(pageService) {
        this.pageService = pageService;
        this.title = "pages";
        this.pages = [
            "page1",
            "page2"
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
        __metadata('design:paramtypes', [page_service_1.PageService])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map