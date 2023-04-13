import Clipboard from "./Clipboard";
import Command from "./Command";
import Editor from "./Editor";

class CutCommand implements Command {
  constructor(private _editor: Editor, 
              private _clipboard: Clipboard) {}
  execute() {
    this._clipboard.content = this._editor.removeText();
  }
  public set editor(value: Editor) {
    this._editor = value;
  }
}
export default CutCommand;
