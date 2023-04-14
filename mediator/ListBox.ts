import UIControl from "./UIControl";

class ListBox extends UIControl {
  private _selection = "";
  public get selection() {
    return this._selection;
  }
  public set selection(value) {
    this._selection = value;
    this._owner.changed(this);
  }
}

export default ListBox;
