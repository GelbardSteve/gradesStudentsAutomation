import { Command } from "./commandInterfaces";
//click on an element////////////////////////////////////////
const clickOnElement = (c: Command) => {
  return new Promise((done) => {
    c.browser
      .waitForElementVisible(c.data[1], 8000, false)
      .click(c.data[1], (res) => {
        c.report({
          command: "Click On",
          cellData: c.data,
          statusData: res.status === 0,
          reportName: c.reportName,
          browserName: c.browserName
        });
        c.browser.pause(300, () => {
          done();
        });
      });
  });
};
//////////////////////////////////////////////////////////
export { clickOnElement }