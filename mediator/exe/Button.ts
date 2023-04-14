import UIConrol from "./UIControl";

class Button extends UIConrol {
  private _isEnabled = false;
  public get isEnabled() {
    return this._isEnabled;
  }
  public set isEnabled(value) {
    this._isEnabled = value;
    this.notifyEventHandler();
  }
}
export default Button;
