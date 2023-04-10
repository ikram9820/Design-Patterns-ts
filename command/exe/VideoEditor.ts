class VideoEditor {
  private _contrast = 0.5;
  private _text = "";

  public removeText() {
    this.text = "";
  }
  public get text() {
    return this._text;
  }
  public set text(text: string) {
    this._text = text;
  }

  public get contrast(): number {
    return this._contrast;
  }
  public set contrast(contrast: number) {
    this.contrast = contrast;
  }

  public toString(): string {
    return (
      "VideoEditor{" +
      "contrast=" +
      this._contrast +
      ", text='" +
      this._text +
      "'" +
      "}"
    );
  }
}

export default VideoEditor;
