import { UpdateStudent } from "../page-objects/testStudentTable/updateStudent";
import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";

import { loginAdminS } from "../selectors/loginAdminPage";
import { updateStudentS } from "../selectors/updateStudent";

import * as f from "../service/exportFunction";

const testName: string = "updateStudent";

export = {
  tags: [testName],
  "Update Student": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new LoginAdminPage(browser, f, loginAdminS, testName, browserN).testAdmin();
    new UpdateStudent(browser, f, updateStudentS, testName, browserN).testUpdateS();
  },
};
