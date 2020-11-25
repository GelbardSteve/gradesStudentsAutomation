import { CreateNewStudent } from "../page-objects/testStudentTable/createNewStudent";
import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";

import { createNewUserS } from "../selectors/createNewStudent";
import { loginAdminS } from "../selectors/loginAdminPage";

import * as f from "../service/exportFunction";

const testName: string = "createNewStudent";


export = {
  tags: [testName],
  "Create New Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new LoginAdminPage(
      browser,
      f,
      loginAdminS,
      testName,
      browserN
    ).testAdmin();
    new CreateNewStudent(
      browser,
      f,
      createNewUserS,
      testName,
      browserN
    ).testCreateS();
  },
};
