"use strict";
const path = require("path");
const studentLoginValidation_1 = require("../page-objects/studentLogin/studentLoginValidation");
const studentLogin_1 = require("../selectors/studentLogin/studentLogin");
const reportsCreate_1 = require("../utils/reportsCreate");
const f = require("../service/exportFunction");
const testName = "testStudentLoginValidation";
const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];
module.exports = {
    tags: [testName],
    "Login As Student Validation": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        reportsCreate_1.createNewReport(`${fileName}/${testName}.${browserN}`);
        new studentLoginValidation_1.StudentLoginValidation(browser, f, studentLogin_1.loginStudentS, `${fileName}/${testName}.${browserN}`, browserN).testLoginSV();
    },
};
//# sourceMappingURL=testStudentLoginValidation.js.map