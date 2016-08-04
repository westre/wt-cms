"use strict";
var Module = (function () {
    // god this stupid constructor overloading...
    function Module(nameOrSystemModule, version, image) {
        if (typeof nameOrSystemModule === "object") {
            this.name = nameOrSystemModule.module.name;
            this.version = nameOrSystemModule.module.version;
            this.image = nameOrSystemModule.module.image;
        }
        else if (typeof nameOrSystemModule === "string") {
            this.name = nameOrSystemModule;
            this.version = version;
            this.image = image;
        }
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