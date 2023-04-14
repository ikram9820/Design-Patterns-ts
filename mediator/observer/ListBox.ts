import UIConrol from "./UIControl";

class ListBox extends UIConrol {
  private _selection = "";
  public get selection() {
    return this._selection;
  }
  public set selection(value) {
    this._selection = value;
    this.notifyObservers();
  }
}
export default ListBox;
