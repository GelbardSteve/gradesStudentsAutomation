import { StudentLoginValidation } from "../page-objects/studentLogin/studentLoginValidation";
import { loginStudentS } from "../selectors/studentLogin/studentLogin";
import * as f from "../service/exportFunction";

const testName: string = "testStudentLoginValidation";

export = {
  tags: [testName],
  "Login As Student Validation": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new StudentLoginValidation(browser, f, loginStudentS, testName, browserN).testLoginSV();
  },
};