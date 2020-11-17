import { Command } from "./commandInterfaces";
//insert value to element/////////////////////////////////////
const insertText = (c: Command) => {
  return new Promise((done) => {
    c.browser.setValue(c.data[1], c.data[2], (res) => {
      c.report({
        command: "Insert Text",
        cellData: c.data,
        statusData: res.status === 0, 
        reportName: c.reportName
      });
      c.browser.pause(300, () => {
        done();
      });
    });
  });
};

export { insertText };
