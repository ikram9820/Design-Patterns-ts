import Clipboard from "./Clipboard";
import Command from "./Command";
import Editor from "./Editor";

class CopyCommand implements Command {
  constructor(private _editor: Editor, private _clipboard: Clipboard) {}
  execute() {
    this._clipboard.content = this._editor.getText();
  }
  public set editor(value: Editor) {
    this._editor = value;
  }
}
export default CopyCommand;
