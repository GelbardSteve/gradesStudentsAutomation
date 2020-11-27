export class UpdateStudent {
  constructor(
    private browser: any,
    private f: typeof import("../../service/exportFunction"),
    private data: {
      UpdateButton: any;
      UpdateField: any;
      SaveButton: string[];
    },
    private testName: string,
    private browserN: string
  ) {}

  async testUpdateS() {
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.UpdateButton,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.UpdateField,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clearField({
      browser: this.browser,
      data: this.data.UpdateField,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.insertText({
      browser: this.browser,
      data: this.data.UpdateField,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.SaveButton,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
  }
}
