"use strict";
const path = require("path");
const updateStudent_1 = require("../page-objects/testStudentTable/updateStudent");
const loginAdminPage_1 = require("../page-objects/adminLoginPage/loginAdminPage");
const loginAdminPage_2 = require("../selectors/adminLoginPage/loginAdminPage");
const updateStudent_2 = require("../selectors/testStudentTable/updateStudent");
const reportsCreate_1 = require("../utils/reportsCreate");
const f = require("../service/exportFunction");
const testName = "updateStudent";
const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];
module.exports = {
    tags: [testName],
    "Update Student": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        reportsCreate_1.createNewReport(`${fileName}/${testName}.${browserN}`);
        new loginAdminPage_1.LoginAdminPage(browser, f, loginAdminPage_2.loginAdminS, `${fileName}/${testName}.${browserN}`, browserN).testAdmin();
        new updateStudent_1.UpdateStudent(browser, f, updateStudent_2.updateStudentS, `${fileName}/${testName}.${browserN}`, browserN).testUpdateS();
    },
};
//# sourceMappingURL=updateStudent.js.map