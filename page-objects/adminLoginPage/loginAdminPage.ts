export class LoginAdminPage {
  constructor(
    protected browser: any,
    protected f: typeof import("../../service/exportFunction"),
    protected data: any,
    protected testName: string,
    protected browserN: string
  ) {}

  async testAdmin() {
    console.log(this.data.URL)
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
