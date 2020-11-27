export class InsertValidStudent {
  constructor(
    private browser: any,
    private f: typeof import("../../service/exportFunction"),
    private data: {
      LoginAsStudentButton: string[];
      StudentNumberField: string[];
      SubmitButton: string[];
      StudentTableGrades: string[];
      URL: string[];
    },
    private testName: string,
    private browserN: string
  ) {}

  async testLoginS() {
    await this.f.openBrowser({
      browser: this.browser,
      data: this.data.URL,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.LoginAsStudentButton,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.insertText({
      browser: this.browser,
      data: this.data.StudentNumberField,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.SubmitButton,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.waitForElement({
      browser: this.browser,
      data: this.data.StudentTableGrades,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
  }
}
