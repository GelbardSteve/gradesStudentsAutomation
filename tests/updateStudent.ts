import path = require('path');
import { UpdateStudent } from "../page-objects/testStudentTable/updateStudent";
import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";

import { loginAdminS } from "../selectors/adminLoginPage/loginAdminPage";
import { updateStudentS } from "../selectors/testStudentTable/updateStudent";
import { createNewReport } from "../utils/reportsCreate";

import * as f from "../service/exportFunction";

const testName: string = "updateStudent";

const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0]

export = {
  tags: [testName],
  "Update Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    createNewReport(`${fileName}/${testName}.${browserN}`);
    new LoginAdminPage(
      browser,
      f,
      loginAdminS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testAdmin();
    new UpdateStudent(
      browser,
      f,
      updateStudentS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testUpdateS();
  },
};
