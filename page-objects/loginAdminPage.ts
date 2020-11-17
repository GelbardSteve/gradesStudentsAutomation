export class LoginAdminPage {
  constructor(
    private browser: any,
    private f: typeof import("../service/exportFunction"),
    private data: { URL: string[]; UserName: string[]; ValidationUserName?: string[]; Password: string[]; ValidationPassword?: string[]; SubmitBtn: string[]; },
    private testName: string,
    private browserN: string
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
