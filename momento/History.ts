import EditorState from "./EditorState";

class History {
  private _states: EditorState[] = [];

  public push(state: EditorState) {
    this._states.push(state);
  }

  public pop(): EditorState {
    let removedItem = this._states.pop();
    if (removedItem) return removedItem;
    throw new Error("there is no history");
  }
}

export default History;
