import { Command } from "./commandInterfaces";
//get text/////////////////////////////////////
const getText = (c: Command) => {
  return new Promise((done) => {
    c.browser
      .waitForElementVisible(c.data[1], 10000, false)
      .getText(c.data[1], (res) => {
        c.report({
          command: "Get Text",
          cellData: c.data,
          statusData: res.status === 0,
          reportName: c.reportName,
        });
        c.browser.pause(300, () => {
          done();
        });
      });
  });
};

export { getText }
