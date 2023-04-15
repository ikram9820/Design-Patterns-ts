import EditorState from "./EditorState";

class Editor {
  private _content: string = "";

  public createState(): EditorState {
    return new EditorState(this._content);
  }

  public restore(state: EditorState) {
    this._content = state.content;
  }

  set content(content: string) {
    this._content = content;
  }

  get content(): string {
    return this._content;
  }
}

export default Editor;
