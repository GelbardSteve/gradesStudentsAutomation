import { Report } from "../utils/reportsCreate"

export interface Command {
    browser: any,
    data?: any[]
    report: (r: Report) => void,
    reportName: string;
}
  