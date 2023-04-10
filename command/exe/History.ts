import UndoableCommand from "./UndoableCommand";

class History {
  private _commands: UndoableCommand[] = [];

  public push(command: UndoableCommand) {
    this._commands.push(command);
  }
  public pop(): UndoableCommand {
    return this._commands.pop() as UndoableCommand;
  }
  public get size(): number {
    return this._commands.length;
  }
}
export default History;
