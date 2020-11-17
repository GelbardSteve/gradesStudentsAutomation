export class ValidationAdminPage {
  constructor(
    private browser: any,
    private f: typeof import("../service/exportFunction"),
    private data: { URL: string[]; UserName: string[]; ValidationUserName: string[]; Password: string[]; ValidationPassword: string[]; SubmitBtn?: string[]; },
    private testName: string,
    private browserN: string
  ) {}

  async testAdmin() {

    await this.f.openBrowser({
      browser: this.browser,
      data: this.data.URL,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.UserName,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.Password,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.getText({
      browser: this.browser,
      data: this.data.ValidationUserName,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.UserName,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.getText({
      browser: this.browser,
      data: this.data.ValidationPassword,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
  }
}
