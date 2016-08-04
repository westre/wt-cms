"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var module_entity_1 = require('./module.entity');
var SubModule = (function (_super) {
    __extends(SubModule, _super);
    function SubModule(name, version, image, parentModule) {
        _super.call(this, name, version, image);
        this.parentModule = parentModule;
    }
    return SubModule;
}(module_entity_1.Module));
exports.SubModule = SubModule;
//# sourceMappingURL=submodule.entity.js.map