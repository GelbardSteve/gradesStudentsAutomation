"use strict";
const path = require("path");
const loginAdminPage_1 = require("../page-objects/adminLoginPage/loginAdminPage");
const loginAdminPage_2 = require("../selectors/adminLoginPage/loginAdminPage");
const reportsCreate_1 = require("../utils/reportsCreate");
const f = require("../service/exportFunction");
const testName = "loginToAdmin";
const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];
module.exports = {
    tags: [testName],
    "Login To Admin Page": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        reportsCreate_1.createNewReport(`${fileName}/${testName}.${browserN}`);
        new loginAdminPage_1.LoginAdminPage(browser, f, loginAdminPage_2.loginAdminS, `${fileName}/${testName}.${browserN}`, browserN).testAdmin();
    },
};
//# sourceMappingURL=loginToAdmin.js.map