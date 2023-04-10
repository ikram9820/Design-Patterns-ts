import Task from "./Task";

class GenerateReportTask extends Task {
  protected override doExcute(): void {
    console.log("generate report");
  }
}

export default GenerateReportTask;
