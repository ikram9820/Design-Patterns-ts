import UIConrol from "./UIControl";

class TextBox extends UIConrol {
  private _content = "";
  public get content() {
    return this._content;
  }
  public set content(value) {
    this._content = value;
    this.notifyObservers();
  }
  public isEmpty() {
    return this._content === null || this._content === "";
  }
}
export default TextBox;
