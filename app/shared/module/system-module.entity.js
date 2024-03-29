"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var module_entity_1 = require('./module.entity');
var SystemModule = (function (_super) {
    __extends(SystemModule, _super);
    function SystemModule(component, module, url) {
        _super.call(this, module.name, module.version, module.image);
        this.component = component;
        this.url = url;
    }
    return SystemModule;
}(module_entity_1.Module));
exports.SystemModule = SystemModule;
//# sourceMappingURL=system-module.entity.js.map