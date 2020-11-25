"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
//get text/////////////////////////////////////
const getText = (c) => {
    return new Promise((done) => {
        c.browser
            .waitForElementVisible(c.data[1], 10000, false)
            .getText(c.data[1], (res) => {
            c.report({
                command: "Get Text Of",
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
exports.getText = getText;
//# sourceMappingURL=getText.js.map