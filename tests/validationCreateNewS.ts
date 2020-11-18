import { ValidationCreateNewS } from "../page-objects/testStudentTable/validationCreateNewS";
import { createNewUserS } from "../selectors/createNewStudent";

import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";
import { loginAdminS } from "../selectors/loginAdminPage";

import * as f from "../service/exportFunction";

const testName: string = "ValidationCreateNewS";



export = {
  tags: [testName],
  "Validation Create New Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new LoginAdminPage(browser, f, loginAdminS, testName, browserN).testAdmin();
    new ValidationCreateNewS(
      browser,
      f,
      createNewUserS,
      testName,
      browserN
    ).testCreateS();
  },
};
