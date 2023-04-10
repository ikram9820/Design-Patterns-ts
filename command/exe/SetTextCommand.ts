import AbstractUndoableCommand from "./AbstactUndoableCommand";
import History from "./History";
import VideoEditor from "./VideoEditor";

class SetTextCommand extends AbstractUndoableCommand {
  private _text: string;

  constructor(text: string, history: History, vidoEditor: VideoEditor) {
    super(history, vidoEditor);
    this._text = text;
  }
  undo(): void {
    this._videoEditor.removeText()
  }

  protected doExecute(): void {
    this._videoEditor.text = this._text;
  }
}

export default SetTextCommand;
