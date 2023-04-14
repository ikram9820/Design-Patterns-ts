import UIConrol from "./UIControl";

class CheckBox extends UIConrol {
  private _isChecked = false;
  public get isChecked() {
    return this._isChecked;
  }
  public set isChecked(value) {
    this._isChecked = value;
    this.notifyEventHandler();
  }
}
export default CheckBox;
