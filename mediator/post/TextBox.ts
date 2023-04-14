import UIControl from "./UIControl";

class TextBox extends UIControl {
  private _content = "";
  public get content() {
    return this._content;
  }
  public set content(value) {
    this._content = value.trim();
    this._owner.changed(this);
  }
  public get isEmpty() {
    return this._content === "";
  }
}
export default TextBox;
