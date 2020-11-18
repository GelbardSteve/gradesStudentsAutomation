export class CreateNewStudent {
  constructor(
    private browser: any,
    private f: typeof import("../../service/exportFunction"),
    private data: {
      InserStudentBtn: any[];
      StudentNameField: any[];
      StudentNumberField: string[];
      StudentGradesField: string[];
      SubmitBtn: string[];
    },
    private testName: string,
    private browserN: string
  ) {}

  async testCreateS() {
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.InserStudentBtn,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.insertText({
      browser: this.browser,
      data: this.data.StudentNameField,
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
    await this.f.insertText({
      browser: this.browser,
      data: this.data.StudentGradesField,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.insertText({
      browser: this.browser,
      data: this.data.StudentGradesField,
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
