"use strict";
var SubNavigation = (function () {
    function SubNavigation(key, display) {
        this.key = key;
        this.display = display;
    }
    SubNavigation.prototype.getDisplayName = function () {
        return this.display;
    };
    return SubNavigation;
}());
exports.SubNavigation = SubNavigation;
//# sourceMappingURL=subnavigation.entity.js.map