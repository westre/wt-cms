"use strict";
var WebPage = (function () {
    function WebPage(title) {
        this.title = title;
    }
    Object.defineProperty(WebPage.prototype, "isHomePage", {
        get: function () {
            return this.homePage;
        },
        set: function (bool) {
            this.homePage = bool;
        },
        enumerable: true,
        configurable: true
    });
    return WebPage;
}());
exports.WebPage = WebPage;
//# sourceMappingURL=web-page.entity.js.map