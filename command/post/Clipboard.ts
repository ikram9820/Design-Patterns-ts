class Clipboard {
  private _content = "";

  public get content() {
    return this._content;
  }
  public set content(value) {
    this._content = value;
  }
}
export default Clipboard;
