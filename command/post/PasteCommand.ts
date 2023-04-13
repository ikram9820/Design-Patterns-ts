import Clipboard from "./Clipboard";
import Command from "./Command";
import Editor from "./Editor";

class PasteCommand implements Command {
  constructor(private _editor: Editor, 
              private _clipboard: Clipboard) {}
  execute() {
    this._editor.setText(this._clipboard.content);
  }
  public set editor(value: Editor) {
    this._editor = value;
  }
}
export default PasteCommand;
