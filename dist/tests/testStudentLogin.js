"use strict";
const path = require("path");
const insertValidStudent_1 = require("../page-objects/studentLogin/insertValidStudent");
const studentLogin_1 = require("../selectors/studentLogin/studentLogin");
const reportsCreate_1 = require("../utils/reportsCreate");
const f = require("../service/exportFunction");
const testName = "testStudentLogin";
const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];
module.exports = {
    tags: [testName],
    "Login As Student": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        reportsCreate_1.createNewReport(`${fileName}/${testName}.${browserN}`);
        new insertValidStudent_1.InsertValidStudent(browser, f, studentLogin_1.loginStudentS, `${fileName}/${testName}.${browserN}`, browserN).testLoginS();
    },
};
//# sourceMappingURL=testStudentLogin.js.map