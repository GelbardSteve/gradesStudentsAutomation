"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDataToReport = exports.createNewReport = void 0;
const fs = require("fs");
//Get today date
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const year = today.getFullYear();
const todayDate = `${month}-${day}-${year}`;
const createReport = (repoName) => {
    return `../studentGradesAutomation/reports/${repoName}.txt`;
};
const getData = () => {
    return `Time: ${today.getHours()}:${today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()}, Date: ${todayDate}\r\n\r\n`;
};
const createNewReport = (NameOfReport) => {
    // writeFile function with filename, content and callback function
    fs.writeFile(createReport(NameOfReport), getData(), (err) => {
        if (err)
            throw err;
    });
};
exports.createNewReport = createNewReport;
fs.readdir("../studentGradesAutomation/tests", (err, files) => {
    files.forEach((file) => {
        if (!fs.existsSync(`../studentGradesAutomation/reports/${file.split(".")[0]}`)) {
            fs.mkdirSync(`../studentGradesAutomation/reports/${file.split(".")[0]}`);
        }
    });
});
const insertDataToReport = (r) => {
    fs.appendFile(`../studentGradesAutomation/reports/${r.reportName}.txt`, `${r.statusData ? "SUCCEED" : "FAILED"}: Browser:${r.browserName} | Command: ${r.command} ${r.cellData ? r.cellData.join(" | ") : null}\r\n`, (err) => {
        if (err)
            throw err;
    });
};
exports.insertDataToReport = insertDataToReport;
//# sourceMappingURL=reportsCreate.js.map