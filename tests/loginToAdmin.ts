import { LoginAdminPage } from "../page-objects/loginAdminPage";
import { selectors } from "../selectors/loginAdminPage";
import * as f from "../service/exportFunction";

export = {
  tags: ["LoginToAdminPage"],
  "Login To Admin Page": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new LoginAdminPage(browser, f, selectors, "LoginToAdminPage.txt", browserN).testAdmin();
  },
};
