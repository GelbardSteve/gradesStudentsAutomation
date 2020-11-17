"use strict";
const loginAdminPage_1 = require("../page-objects/loginAdminPage");
const loginAdminPage_2 = require("../selectors/loginAdminPage");
const f = require("../service/exportFunction");
module.exports = {
    tags: ["LoginToAdminPage"],
    "Login To Admin Page": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        new loginAdminPage_1.LoginAdminPage(browser, f, loginAdminPage_2.selectors, "LoginToAdminPage.txt", browserN).testAdmin();
    },
};
//# sourceMappingURL=loginToAdmin.js.map