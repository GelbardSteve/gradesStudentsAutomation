import { GoogleSeach } from "../page-objects/loginAdminPage";
import { selectors } from "../selectors/loginAdminPage";
import * as f from "../service/exportFunction";

export = {
  tags: ["LoginToAdminPage"],
  "Login To Admin Page": (browser: any) => {
    new GoogleSeach(browser, f, selectors, "LoginToAdminPage.txt").testAdmin();
    browser.end();
  },
};
