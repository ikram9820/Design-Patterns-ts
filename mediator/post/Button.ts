import UIControl from "./UIControl";

class Button extends UIControl {
  private _isEnabled = false;
  public get isEnabled() {
    return this._isEnabled;
  }
  public set isEnabled(value) {
    this._isEnabled = value;
    this._owner.changed(this);
  }
}
export default Button;
