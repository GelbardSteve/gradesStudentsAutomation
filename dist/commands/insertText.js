"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertText = void 0;
//insert value to element/////////////////////////////////////
const insertText = (c) => {
    return new Promise((done) => {
        c.browser.setValue(c.data[1], c.data[2], (res) => {
            c.report({
                command: "Insert Text To",
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
exports.insertText = insertText;
//# sourceMappingURL=insertText.js.map