import { Command } from "./commandInterfaces";
//waitForElement For element/////////////////////////////
const waitForElement = (c: Command) => {
  return new Promise<void>((done) => {
    c.browser.waitForElementVisible(c.data[1], 8000, false, (res) => {
      c.report({
        command: "Wait For",
        cellData: c.data,
        statusData: res.status === 0,
        reportName: c.reportName,
        browserName: c.browserName,
      });
      c.browser.pause(300, () => {
        done();
      });
    });
  });
};
//////////////////////////////////////////////////////////
export { waitForElement };
