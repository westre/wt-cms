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
var module_entity_1 = require('./module.entity');
var system_module_entity_1 = require('./system-module.entity');
var ModuleService = (function () {
    function ModuleService() {
    }
    ModuleService.prototype.getModules = function () {
        return [
            new system_module_entity_1.SystemModule("DashboardComponent", new module_entity_1.Module("Dashboard", "v0.1", "fa-th", "/dashboard")),
            new system_module_entity_1.SystemModule("PagesComponent", new module_entity_1.Module("Pages", "v0.1", "fa-file-text-o", "/pages")),
            new system_module_entity_1.SystemModule("FilesComponent", new module_entity_1.Module("Files", "v0.1", "fa-files-o", "/files")),
            new system_module_entity_1.SystemModule("UsersComponent", new module_entity_1.Module("Users", "v0.1", "fa-users", "/users")),
            new system_module_entity_1.SystemModule("ModulesComponent", new module_entity_1.Module("Modules", "v0.1", "fa-clone", "/modules")),
            new system_module_entity_1.SystemModule("SettingsComponent", new module_entity_1.Module("Settings", "v0.1", "fa-cog", "/settings")),
        ];
    };
    ModuleService.prototype.getModule = function (instance) {
        var systemModules = this.getModules();
        for (var _i = 0, systemModules_1 = systemModules; _i < systemModules_1.length; _i++) {
            var systemModule = systemModules_1[_i];
            if (systemModule.component === instance.constructor.name) {
                return systemModule;
            }
        }
        return null;
    };
    ModuleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ModuleService);
    return ModuleService;
}());
exports.ModuleService = ModuleService;
//# sourceMappingURL=module.service.js.map