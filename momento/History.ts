import EditorState from "./EditorState";

class EditorHistory {
  private _states?: EditorState[];

  public push(state: EditorState) {
    this._states?.push(state);
  }

  public pop(): EditorState | undefined {
    return this._states?.pop();
  }
}

export default EditorHistory;
