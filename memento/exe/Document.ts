import DocumentState from "./DocumentState";

class Document {
  private _content = "";

  public createState(): DocumentState {
    return new DocumentState(this.content);
  }
  public restore(state: DocumentState) {
    this.content = state.content;
  }
  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
}
export default Document;
