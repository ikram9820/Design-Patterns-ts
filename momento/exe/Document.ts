import DocumentState from "./DocumentState";

class Document {
  private _content = "";
  private _fontName = "";
  private _fontSize = 0;

  public createState(): DocumentState {
    return new DocumentState(this.content, this.fontName, this.fontSize);
  }

  public restore(state: DocumentState) {
    this.content = state.content;
    this.fontName = state.fontName;
    this.fontSize = state.fontSize;
  }

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public get fontName(): string {
    return this._fontName;
  }
  public set fontName(value: string) {
    this._fontName = value;
  }
  public get fontSize(): number {
    return this._fontSize;
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }

  public toString(): string {
    return (
      "Document{" +
      "content='" +
      this.content +
      "'" +
      ", fontName='" +
      this.fontName +
      "'" +
      ", fontSize=" +
      this.fontSize +
      "}"
    );
  }
}

export default Document;
