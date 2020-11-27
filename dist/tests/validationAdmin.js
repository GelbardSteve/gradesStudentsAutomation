"use strict";
const validationAdminPage_1 = require("../page-objects/adminLoginPage/validationAdminPage");
const loginAdminPage_1 = require("../selectors/adminLoginPage/loginAdminPage");
const f = require("../service/exportFunction");
const testName = "validationAdmin";
module.exports = {
    tags: [testName],
    "Validation Admin Page": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        new validationAdminPage_1.ValidationAdminPage(browser, f, loginAdminPage_1.loginAdminS, testName, browserN).testAdmin();
    },
};
//# sourceMappingURL=validationAdmin.js.map