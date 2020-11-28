"use strict";
const path = require("path");
const validationCreateNewS_1 = require("../page-objects/testStudentTable/validationCreateNewS");
const createNewStudent_1 = require("../selectors/testStudentTable/createNewStudent");
const loginAdminPage_1 = require("../page-objects/adminLoginPage/loginAdminPage");
const loginAdminPage_2 = require("../selectors/adminLoginPage/loginAdminPage");
const reportsCreate_1 = require("../utils/reportsCreate");
const f = require("../service/exportFunction");
const testName = "validationCreateNewS";
const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];
module.exports = {
    tags: [testName],
    "Validation Create New Student": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        reportsCreate_1.createNewReport(`${fileName}/${testName}.${browserN}`);
        new loginAdminPage_1.LoginAdminPage(browser, f, loginAdminPage_2.loginAdminS, `${fileName}/${testName}.${browserN}`, browserN).testAdmin();
        new validationCreateNewS_1.ValidationCreateNewS(browser, f, createNewStudent_1.createNewUserS, `${fileName}/${testName}.${browserN}`, browserN).testCreateS();
    },
};
//# sourceMappingURL=validationCreateNewS.js.map