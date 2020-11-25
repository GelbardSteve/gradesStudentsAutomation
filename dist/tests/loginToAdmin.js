"use strict";
const loginAdminPage_1 = require("../page-objects/adminLoginPage/loginAdminPage");
const loginAdminPage_2 = require("../selectors/loginAdminPage");
const f = require("../service/exportFunction");
const testName = "loginToAdmin";
module.exports = {
    tags: [testName],
    "Login To Admin Page": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        new loginAdminPage_1.LoginAdminPage(browser, f, loginAdminPage_2.loginAdminS, testName, browserN).testAdmin();
    },
};
//# sourceMappingURL=loginToAdmin.js.map