class DocumentState {
  constructor(private readonly _content: string) {}

  public get content(): string {
    return this._content;
  }
}

export default DocumentState;
