import { LoginAdminPage } from "../page-objects/adminLoginPage/loginAdminPage";
import { loginAdminS } from "../selectors/loginAdminPage";
import * as f from "../service/exportFunction";

const testName: string = "loginToAdmin";

export = {
  tags: [testName],
  "Login To Admin Page": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new LoginAdminPage(browser, f, loginAdminS, testName, browserN).testAdmin();
  },
};
