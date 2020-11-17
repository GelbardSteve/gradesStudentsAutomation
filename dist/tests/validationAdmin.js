"use strict";
const validationAdminPage_1 = require("../page-objects/validationAdminPage");
const validationAdminPage_2 = require("../selectors/validationAdminPage");
const f = require("../service/exportFunction");
module.exports = {
    tags: ["ValidationAdminPage"],
    "Validation Admin Page": (browser) => {
        new validationAdminPage_1.GoogleSeach(browser, f, validationAdminPage_2.selectors, "ValidationAdminPage.txt").testAdmin();
        browser.end();
    },
};
//# sourceMappingURL=validationAdmin.js.map