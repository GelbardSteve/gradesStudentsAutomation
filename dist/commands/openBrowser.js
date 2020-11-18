"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openBrowser = void 0;
// open browser and go to choosen url//////////////////////////
const openBrowser = (c) => {
    console.log(c.data);
    return new Promise((done) => {
        c.browser.windowMaximize();
        c.browser.url(c.data[1], (res) => {
            c.report({
                command: "Open Browser",
                cellData: c.data,
                statusData: res.status === 0,
                reportName: c.reportName,
                browserName: c.browserName
            });
            c.browser.pause(300, () => {
                done();
            });
        });
    });
};
exports.openBrowser = openBrowser;
//# sourceMappingURL=openBrowser.js.map