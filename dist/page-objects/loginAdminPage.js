"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSeach = void 0;
class GoogleSeach {
    constructor(browser, f, data, testName) {
        this.browser = browser;
        this.f = f;
        this.data = data;
        this.testName = testName;
    }
    testAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            this.f.createNewReport(this.testName);
            yield this.f.openBrowser({
                browser: this.browser,
                data: this.data.GoogleURL,
                report: this.f.insertDataToReport,
                reportName: this.testName,
            });
            yield this.f.insertText({
                browser: this.browser,
                data: this.data.UserName,
                report: this.f.insertDataToReport,
                reportName: this.testName,
            });
            yield this.f.insertText({
                browser: this.browser,
                data: this.data.Password,
                report: this.f.insertDataToReport,
                reportName: this.testName,
            });
            yield this.f.clickOnElement({
                browser: this.browser,
                data: this.data.SubmitBtn,
                report: this.f.insertDataToReport,
                reportName: this.testName,
            });
        });
    }
}
exports.GoogleSeach = GoogleSeach;
//# sourceMappingURL=loginAdminPage.js.map