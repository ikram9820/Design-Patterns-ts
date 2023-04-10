import Task from "./Task";

class TransferMoneyTask extends Task {
  protected override doExcute(): void {
    console.log("transfer Money");
  }
}

export default TransferMoneyTask;
