import path = require("path");
import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";
import { loginAdminS } from "../selectors/adminLoginPage/loginAdminPage";
import { createNewReport } from "../utils/reportsCreate";

import * as f from "../service/exportFunction";

const testName: string = "loginToAdmin";

const scriptName = path.basename(__filename);
const fileName = scriptName.split(".")[0];

export = {
  tags: [testName],
  "Login To Admin Page": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    createNewReport(`${fileName}/${testName}.${browserN}`);
    new LoginAdminPage(
      browser,
      f,
      loginAdminS,
      `${fileName}/${testName}.${browserN}`,
      browserN
    ).testAdmin();
  },
};
