import History from "./History";
import HtmlDocument from "./HtmlDocument";
import UndoableCommand from "./UndoableCommand";

class BoldCommand implements UndoableCommand {
  private _prevContent = "";
  constructor(private _history: History, private _document: HtmlDocument) {}
  public unExecute(): void {
    this._document.content = this._prevContent;    
}
  public execute(): void {
    this._prevContent=this._document.content;
    this._document.makeBold();
    this._history.push(this);
    }
}

export default BoldCommand;
