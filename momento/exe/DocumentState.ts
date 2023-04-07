
class DocumentState {
  constructor(
    private readonly _content: string,
    private readonly _fontName: string,
    private readonly _fontSize: number
  ) {}

  public get fontSize(): number {
    return this._fontSize;
  }
  public get content(): string {
    return this._content;
  }
  public get fontName(): string {
    return this._fontName;
  }
}

export default DocumentState;
