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
var SubNavigationComponent = (function () {
    function SubNavigationComponent() {
        this.pages = [];
    }
    SubNavigationComponent.prototype.setPages = function (pages) {
        this.pages = pages;
    };
    SubNavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sub-navigation',
            templateUrl: 'sub-navigation.component.html',
            styleUrls: ['sub-navigation.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], SubNavigationComponent);
    return SubNavigationComponent;
}());
exports.SubNavigationComponent = SubNavigationComponent;
//# sourceMappingURL=sub-navigation.component.js.map