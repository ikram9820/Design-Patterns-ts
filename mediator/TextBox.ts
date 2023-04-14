import UIControl from "./UIConrol";

class TextBox extends UIControl {
  private _content = "";
  public get content() {
    return this._content;
  }
  public set content(value) {
    this._content = value;
    this._owner.changed(this);
  }
  public isEmpty() {
    return this._content === null || this._content === "";
  }
}

export default TextBox;
