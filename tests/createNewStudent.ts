import path = require('path');
import { CreateNewStudent } from "../page-objects/testStudentTable/createNewStudent";
import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";

import { createNewUserS } from "../selectors/testStudentTable/createNewStudent";
import { loginAdminS } from "../selectors/adminLoginPage/loginAdminPage";
import { createNewReport } from "../utils/reportsCreate";


import * as f from "../service/exportFunction";

const testName: string = "createNewStudent";

const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0]

export = {
  tags: [testName],
  "Create New Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    createNewReport(`${fileName}/${testName}.${browserN}`)
    new LoginAdminPage(
      browser,
      f,
      loginAdminS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testAdmin();
    new CreateNewStudent(
      browser,
      f,
      createNewUserS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testCreateS();
  },
};
