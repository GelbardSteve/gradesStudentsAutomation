import { Command } from "./commandInterfaces";
//
const pressTab = (c: Command) => {
  return new Promise<void>((done) => {
    c.browser.keys(c.browser.Keys.TAB, (res) => {
      c.report({
        command: "Press Tab",
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

export { pressTab };
