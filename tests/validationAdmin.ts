import { ValidationAdminPage } from "../page-objects/validationAdminPage";
import { selectors } from "../selectors/loginAdminPage";
import * as f from "../service/exportFunction";

export = {
  tags: ["ValidationAdminPage"],
  "Validation Admin Page": (browser: any) => {
    const browserN: any = browser.options.desiredCapabilities.browserName;
    new ValidationAdminPage(
      browser,
      f,
      selectors,
      "ValidationAdminPage",
      browserN
    ).testAdmin();
  },
};
