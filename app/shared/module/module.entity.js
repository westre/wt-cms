"use strict";
var Module = (function () {
    function Module(name, version, image, routerUrl) {
        this.name = name;
        this.version = version;
        this.image = image;
        this.routerUrl = routerUrl; //rm
    }
    Module.prototype.initialize = function (systemModule) {
        this.name = systemModule.module.name;
        this.version = systemModule.module.version;
        this.image = systemModule.module.image;
        this.routerUrl = systemModule.module.routerUrl; //rm
    };
    return Module;
}());
exports.Module = Module;
//# sourceMappingURL=module.entity.js.map