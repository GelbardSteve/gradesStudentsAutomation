import path = require("path");
import { ValidationAdminPage } from "../page-objects/adminLoginPage/validationAdminPage";
import { loginAdminS } from "../selectors/adminLoginPage/loginAdminPage";
import { createNewReport } from "../utils/reportsCreate";

import * as f from "../service/exportFunction";

const testName: string = "validationAdmin";

const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];

export = {
  tags: [testName],
  "Validation Admin Page": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    createNewReport(`${fileName}/${testName}.${browserN}`);
    new ValidationAdminPage(
      browser,
      f,
      loginAdminS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testAdmin();
  },
};
