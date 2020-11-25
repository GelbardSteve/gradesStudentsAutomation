import { ValidationAdminPage } from "../page-objects/adminLoginPage/validationAdminPage";
import { loginAdminS } from "../selectors/loginAdminPage";
import * as f from "../service/exportFunction";

const testName: string = "validationAdmin";

export = {
  tags: [testName],
  "Validation Admin Page": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new ValidationAdminPage(browser, f, loginAdminS, testName, browserN).testAdmin();
  },
};
