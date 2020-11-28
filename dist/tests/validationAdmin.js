"use strict";
const path = require("path");
const validationAdminPage_1 = require("../page-objects/adminLoginPage/validationAdminPage");
const loginAdminPage_1 = require("../selectors/adminLoginPage/loginAdminPage");
const reportsCreate_1 = require("../utils/reportsCreate");
const f = require("../service/exportFunction");
const testName = "validationAdmin";
const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];
module.exports = {
    tags: [testName],
    "Validation Admin Page": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        reportsCreate_1.createNewReport(`${fileName}/${testName}.${browserN}`);
        new validationAdminPage_1.ValidationAdminPage(browser, f, loginAdminPage_1.loginAdminS, `${fileName}/${testName}.${browserN}`, browserN).testAdmin();
    },
};
//# sourceMappingURL=validationAdmin.js.map