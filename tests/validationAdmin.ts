import { GoogleSeach } from "../page-objects/validationAdminPage";
import { selectors } from "../selectors/validationAdminPage";
import * as f from "../service/exportFunction";

export = {
  tags: ["ValidationAdminPage"],
  "Validation Admin Page": (browser: any) => {
    new GoogleSeach(browser, f, selectors, "ValidationAdminPage.txt").testAdmin();
    browser.end();
  },
};
