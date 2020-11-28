"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForElement = void 0;
//waitForElement For element/////////////////////////////
const waitForElement = (c) => {
    return new Promise((done) => {
        c.browser.waitForElementVisible(c.data[1], 8000, false, (res) => {
            c.report({
                command: "Wait For",
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
exports.waitForElement = waitForElement;
//# sourceMappingURL=waitForElement.js.map