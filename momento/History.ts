import EditorState from "./EditorState";

class History {
  private _states: EditorState[] = [];

  public push(state: EditorState) {
    this._states.push(state);
  }

  public pop(): EditorState {
    if (this._states.length === 0)
      throw new Error("There is no history, you cann't pop anymore.");
    let index = this._states.length - 1;
    let state = this._states[index];
    this._states.pop();
    return state;
  }
}

export default History;
