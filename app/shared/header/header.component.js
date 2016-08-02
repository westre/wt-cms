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
var navigation_component_1 = require('../navigation/navigation.component');
var sub_navigation_component_1 = require('../sub-navigation/sub-navigation.component');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = "undefined";
    }
    HeaderComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    HeaderComponent.prototype.getNavigation = function () {
        return this.navigationComponent;
    };
    __decorate([
        core_1.ViewChild(navigation_component_1.NavigationComponent), 
        __metadata('design:type', navigation_component_1.NavigationComponent)
    ], HeaderComponent.prototype, "navigationComponent", void 0);
    __decorate([
        core_1.ViewChild(sub_navigation_component_1.SubNavigationComponent), 
        __metadata('design:type', sub_navigation_component_1.SubNavigationComponent)
    ], HeaderComponent.prototype, "subNavigationComponent", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header',
            templateUrl: 'header.component.html',
            styleUrls: ['header.component.css'],
            directives: [navigation_component_1.NavigationComponent, sub_navigation_component_1.SubNavigationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map