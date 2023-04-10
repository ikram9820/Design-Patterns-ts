import History from "./History";
import UndoableCommand from "./UndoableCommand";
import VideoEditor from "./VideoEditor";

class RemoveCommand implements UndoableCommand {
  private _prevContent = "";

  constructor(private _videoEditor: VideoEditor, private _history: History) {}

  public unexecute(): void {
    this._videoEditor.text = this._prevContent 
  }
  execute(): void {
    this._prevContent = this._videoEditor.text;
    this._videoEditor.removeText();
    this._history.push(this);
  }
}
export default RemoveCommand;