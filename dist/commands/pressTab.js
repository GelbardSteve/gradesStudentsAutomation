"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pressTab = void 0;
//
const pressTab = (c) => {
    return new Promise((done) => {
        c.browser.keys(c.browser.Keys.TAB, (res) => {
            c.report({
                command: "Press Tab",
                cellData: c.data,
                statusData: res.status === 0,
                reportName: c.reportName,
            });
            c.browser.pause(300, () => {
                done();
            });
        });
    });
};
exports.pressTab = pressTab;
//# sourceMappingURL=pressTab.js.map