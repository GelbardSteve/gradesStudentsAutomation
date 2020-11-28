"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearField = void 0;
//clear value function///////////////////////////////////
const clearField = (c) => {
    return new Promise((done) => {
        c.browser
            .waitForElementVisible(c.data[1], 8000, false)
            .clearValue(c.data[1], (res) => {
            c.report({
                command: "Clear Value Of",
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
exports.clearField = clearField;
//# sourceMappingURL=clearField.js.map