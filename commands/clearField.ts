import { Command } from "./commandInterfaces";
//clear value function///////////////////////////////////////
const clearField = (c: Command) => {
  return new Promise<void>((done) => {
    c.browser
      .waitForElementVisible(c.data[1], 8000, false)
      .clearValue(c.data[1], (res) => {
        c.report({
          command: "Clear Value Of",
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
export { clearField };
  