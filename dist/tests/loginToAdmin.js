"use strict";
const loginAdminPage_1 = require("../page-objects/loginAdminPage");
const loginAdminPage_2 = require("../selectors/loginAdminPage");
const f = require("../service/exportFunction");
module.exports = {
    tags: ["LoginToAdminPage"],
    "Login To Admin Page": (browser) => {
        new loginAdminPage_1.GoogleSeach(browser, f, loginAdminPage_2.selectors, "LoginToAdminPage.txt").testAdmin();
        browser.end();
    },
};
//# sourceMappingURL=loginToAdmin.js.map