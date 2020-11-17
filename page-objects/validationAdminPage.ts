export class GoogleSeach {
  constructor(private browser, private f, private data, private testName) {}

  async testAdmin() {
    this.f.createNewReport(this.testName);

    await this.f.openBrowser({
      browser: this.browser,
      data: this.data.GoogleURL,
      report: this.f.insertDataToReport,
      reportName: this.testName,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.UserName,
      report: this.f.insertDataToReport,
      reportName: this.testName,
    });
    await this.f.pressTab({
      browser: this.browser,
      report: this.f.insertDataToReport,
      reportName: this.testName,
    });
    await this.f.getText({
      browser: this.browser,
      data: this.data.ValidationUserName,
      report: this.f.insertDataToReport,
      reportName: this.testName,
    });
    await this.f.pressTab({
      browser: this.browser,
      report: this.f.insertDataToReport,
      reportName: this.testName,
    });
    await this.f.getText({
      browser: this.browser,
      data: this.data.ValidationPassword,
      report: this.f.insertDataToReport,
      reportName: this.testName,
    });
  }
}
