import Command from "./Command";
import History from "./History";

class UndoCommand implements Command {
  constructor(private _history: History) {}
  execute(): void {
    this._history.size > 0 && this._history.pop().undo();
  }
}
export default UndoCommand;
