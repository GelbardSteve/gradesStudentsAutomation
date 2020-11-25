import { Command } from "./commandInterfaces";
//insert value to element/////////////////////////////////////
const insertText = (c: Command) => {
  return new Promise<void>((done) => {
    c.browser.setValue(c.data[1], c.data[2], (res) => {
      c.report({
        command: "Insert Text To",
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

export { insertText };
