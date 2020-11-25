export class ValidationCreateNewS {
  constructor(
    private browser: any,
    private f: typeof import("../../service/exportFunction"),
    private data: {
      InserStudentBtn: string[];
      StudentNameField: string[];
      StudentNameFieldValidation: string[];
      StudentNumberField: string[];
      StudentNumberFieldValidation: string[];
      StudentGradesField: string[];
      StudentGradesFieldValidation: string[];
      SubmitBtn?: string[];
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
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.StudentNameField,
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
    await this.f.getText({
      browser: this.browser,
      data: this.data.StudentNameFieldValidation,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.StudentGradesField,
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
    await this.f.clickOnElement({
      browser: this.browser,
      data: this.data.StudentNameField,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
    await this.f.getText({
      browser: this.browser,
      data: this.data.StudentGradesFieldValidation,
      report: this.f.insertDataToReport,
      reportName: this.testName,
      browserName: this.browserN,
    });
  }
}
