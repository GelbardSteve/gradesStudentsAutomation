import * as fs from "fs";

export interface Report {
  cellData: string[];
  command: string;
  statusData: boolean;
  reportName: string;
  browserName: string;
}

//Get today date
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const year = today.getFullYear();
const todayDate = `${month}-${day}-${year}`;

const createReport = (repoName: string) => {
  return `../studentGradesAutomation/reports/${repoName}.txt`;
};

const getData = () => {
  return `Time: ${today.getHours()}:${
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
  }, Date: ${todayDate}\r\n\r\n`;
};

const createNewReport = (NameOfReport) => {
  // writeFile function with filename, content and callback function
  fs.writeFile(createReport(NameOfReport), getData(), (err) => {
    if (err) throw err;
  });
};

const insertDataToReport = (r: Report) => {
  fs.appendFile(
    `../studentGradesAutomation/reports/${r.reportName}.txt`,
    `${r.statusData ? "SUCCEED" : "FAILED"}: Command ${r.command} Browser:${
      r.browserName
    } Data: ${r.cellData ? r.cellData.join(" | ") : null}\r\n`,
    (err) => {
      if (err) throw err;
    }
  );
};

export { createNewReport, insertDataToReport };
