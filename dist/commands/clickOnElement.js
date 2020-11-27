"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickOnElement = void 0;
//click on an element////////////////////////////////////
const clickOnElement = (c) => {
    return new Promise((done) => {
        c.browser
            .waitForElementVisible(c.data[1], 8000, false)
            .click(c.data[1], (res) => {
            c.report({
                command: "Click On",
                cellData: c.data,
                statusData: res.status === 0,
                reportName: c.reportName,
                browserName: c.browserName,
            });
            c.browser.pause(300, () => {
                done();
            });
        });
    });
};
exports.clickOnElement = clickOnElement;
//# sourceMappingURL=clickOnElement.js.map