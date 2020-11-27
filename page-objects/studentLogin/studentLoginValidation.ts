export class StudentLoginValidation {
  constructor(
    private browser: any,
    private f: typeof import("../../service/exportFunction"),
    private data,
    private testName: string,
    private browserN: string
  ) {}

  async testLoginSV() {
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
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.StudentNumberField,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.HeaderOfStudent,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.getText({
      browser: this.browser,
      data: this.data.StudentNumberFieldValidation,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
  }
}
