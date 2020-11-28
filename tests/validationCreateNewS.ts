import path = require("path");
import { ValidationCreateNewS } from "../page-objects/testStudentTable/validationCreateNewS";
import { createNewUserS } from "../selectors/testStudentTable/createNewStudent";

import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";
import { loginAdminS } from "../selectors/adminLoginPage/loginAdminPage";
import { createNewReport } from "../utils/reportsCreate";

import * as f from "../service/exportFunction";

const testName: string = "validationCreateNewS";

const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];

export = {
  tags: [testName],
  "Validation Create New Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    createNewReport(`${fileName}/${testName}.${browserN}`);
    new LoginAdminPage(
      browser,
      f,
      loginAdminS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testAdmin();
    new ValidationCreateNewS(
      browser,
      f,
      createNewUserS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testCreateS();
  },
};
