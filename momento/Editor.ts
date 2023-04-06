import EditorState from "./EditorState";

class Editor {
  private _content: string = "";

  public undo(state: EditorState) {
    this._content = state.data;
  }

  get content(): string {
    return this._content;
  }

  set content(content: string) {
    this._content = content;
  }
}

export default Editor;
