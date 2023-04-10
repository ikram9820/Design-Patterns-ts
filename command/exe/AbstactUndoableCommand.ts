import History from "./History";
import UndoableCommand from "./UndoableCommand";
import VideoEditor from "./VideoEditor";

abstract class AbstractUndoableCommand implements UndoableCommand {
  constructor(protected _history: History, protected _videoEditor: VideoEditor) {}

  public execute(): void {
    this.doExecute();
    this._history.push(this);
  }
  
  abstract undo(): void;
  protected abstract doExecute(): void;
}

export default AbstractUndoableCommand;
