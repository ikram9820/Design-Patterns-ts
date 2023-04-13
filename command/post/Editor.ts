class Editor {
  private _text = "";

  public removeText(): string {
    let currentText = this._text;
    this.setText("");
    return currentText;
  }
  public getText() {
    return this._text;
  }
  public setText(text: string) {
    this._text = text;
  }
}
export default Editor;
