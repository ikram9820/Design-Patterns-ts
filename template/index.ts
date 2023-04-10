import AuditTrail from "./AuditTrail";
import GenerateReportTask from "./GenerateReportTask";
import TransferMoneyTask from "./TransferMoneyTask";

let generateReport = new GenerateReportTask(new AuditTrail());
generateReport.execute();

let transferMoney = new TransferMoneyTask(new AuditTrail());
transferMoney.execute();