"use strict";
var Module = (function () {
    function Module(name, version, image) {
        this.name = name;
        this.version = version;
        this.image = image;
    }
    Module.prototype.initialize = function (systemModule) {
        this.name = systemModule.module.name;
        this.version = systemModule.module.version;
        this.image = systemModule.module.image;
    };
    return Module;
}());
exports.Module = Module;
//# sourceMappingURL=module.entity.js.map