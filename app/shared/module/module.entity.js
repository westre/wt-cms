"use strict";
var Module = (function () {
    // god this stupid constructor overloading...
    function Module(nameOrSystemModule, version, image) {
        if (typeof nameOrSystemModule === "object") {
            this.name = nameOrSystemModule.name;
            this.version = nameOrSystemModule.version;
            this.image = nameOrSystemModule.image;
        }
        else if (typeof nameOrSystemModule === "string") {
            this.name = nameOrSystemModule;
            this.version = version;
            this.image = image;
        }
    }
    Module.prototype.initialize = function (systemModule) {
        this.name = systemModule.name;
        this.version = systemModule.version;
        this.image = systemModule.image;
    };
    return Module;
}());
exports.Module = Module;
//# sourceMappingURL=module.entity.js.map