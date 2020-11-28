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
exports.StudentLoginValidation = void 0;
class StudentLoginValidation {
    constructor(browser, f, data, testName, browserN) {
        this.browser = browser;
        this.f = f;
        this.data = data;
        this.testName = testName;
        this.browserN = browserN;
    }
    testLoginSV() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.f.openBrowser({
                browser: this.browser,
                data: this.data.URL,
                report: this.f.insertDataToReport,
                reportName: this.testName,
                browserName: this.browserN,
            });
            yield this.f.clickOnElement({
                browser: this.browser,
                data: this.data.LoginAsStudentButton,
                report: this.f.insertDataToReport,
                reportName: this.testName,
                browserName: this.browserN,
            });
            yield this.f.clickOnElement({
                browser: this.browser,
                data: this.data.StudentNumberField,
                report: this.f.insertDataToReport,
                reportName: this.testName,
                browserName: this.browserN,
            });
            yield this.f.clickOnElement({
                browser: this.browser,
                data: this.data.HeaderOfStudent,
                report: this.f.insertDataToReport,
                reportName: this.testName,
                browserName: this.browserN,
            });
            yield this.f.getText({
                browser: this.browser,
                data: this.data.StudentNumberFieldValidation,
                report: this.f.insertDataToReport,
                reportName: this.testName,
                browserName: this.browserN,
            });
        });
    }
}
exports.StudentLoginValidation = StudentLoginValidation;
//# sourceMappingURL=studentLoginValidation.js.map