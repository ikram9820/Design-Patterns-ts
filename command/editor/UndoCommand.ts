import Command from "./Command";
import History from "./History";

class UndoCommand implements Command {
  constructor(private _history: History) {}

  public execute(): void {
    this._history.size > 0 && this._history.pop().unExecute();
  }
}

export default UndoCommand;
