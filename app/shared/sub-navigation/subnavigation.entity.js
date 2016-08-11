"use strict";
var SubNavigation = (function () {
    function SubNavigation(key, display, active) {
        this.key = key;
        this.display = display;
        this.active = active;
    }
    SubNavigation.prototype.getDisplayName = function () {
        return this.display;
    };
    Object.defineProperty(SubNavigation.prototype, "isActive", {
        get: function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    return SubNavigation;
}());
exports.SubNavigation = SubNavigation;
//# sourceMappingURL=subnavigation.entity.js.map