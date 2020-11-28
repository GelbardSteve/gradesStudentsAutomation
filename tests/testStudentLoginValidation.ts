import path = require('path');
import { StudentLoginValidation } from "../page-objects/studentLogin/studentLoginValidation";
import { loginStudentS } from "../selectors/studentLogin/studentLogin";
import { createNewReport } from "../utils/reportsCreate";

import * as f from "../service/exportFunction";

const testName: string = "testStudentLoginValidation";

const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0]

export = {
  tags: [testName],
  "Login As Student Validation": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    createNewReport(`${fileName}/${testName}.${browserN}`);
    new StudentLoginValidation(
      browser,
      f,
      loginStudentS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testLoginSV();
  },
};
