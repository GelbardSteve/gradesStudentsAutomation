import { InsertValidStudent } from "../page-objects/studentLogin/insertValidStudent";
import { loginStudentS } from "../selectors/studentLogin/studentLogin";
import * as f from "../service/exportFunction";

const testName: string = "testStudentLogin";

export = {
  tags: [testName],
  "Login As Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new InsertValidStudent(browser, f, loginStudentS, testName, browserN).testLoginS();
  },
};
