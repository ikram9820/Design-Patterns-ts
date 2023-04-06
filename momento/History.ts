import EditorState from "./EditorState";

class History {
  private _states: EditorState[] = [];

  public push(state: EditorState) {
    this._states?.push(state);
  }

  public pop(): EditorState | undefined {
    return this._states?.pop();
  }
}

export default History;
