class HtmlDocument {
  private _content = "";

  public makeBold() {
    this._content = `<b>${this._content}</b>`;
  }
  public get content() {
    return this._content;
  }
  public set content(value) {
    this._content = value;
  }
}
export default HtmlDocument;
