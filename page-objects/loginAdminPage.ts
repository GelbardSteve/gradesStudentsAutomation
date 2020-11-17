export class LoginAdminPage {
  constructor(
    private browser,
    private f,
    private data,
    private testName,
    private browserN
  ) {}

  async testAdmin() {
    this.browserN === "chrome" ? this.f.createNewReport(this.testName) : null;

    await this.f.openBrowser({
      browser: this.browser,
      data: this.data.URL,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.insertText({
      browser: this.browser,
      data: this.data.UserName,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.insertText({
      browser: this.browser,
      data: this.data.Password,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.SubmitBtn,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
  }
}
