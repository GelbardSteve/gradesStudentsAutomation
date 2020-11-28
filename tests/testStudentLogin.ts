import path = require("path");
import { InsertValidStudent } from "../page-objects/studentLogin/insertValidStudent";
import { loginStudentS } from "../selectors/studentLogin/studentLogin";
import { createNewReport } from "../utils/reportsCreate";

import * as f from "../service/exportFunction";

const testName: string = "testStudentLogin";

const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];

export = {
  tags: [testName],
  "Login As Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    createNewReport(`${fileName}/${testName}.${browserN}`);
    new InsertValidStudent(
      browser,
      f,
      loginStudentS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testLoginS();
  },
};
