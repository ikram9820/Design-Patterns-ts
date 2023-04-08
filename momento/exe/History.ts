import DocumentState from "./DocumentState";

class History {
  private _states: DocumentState[] = [];

  public push(state: DocumentState) {
    this._states.push(state);
  }

  public pop(): DocumentState {
    let removedItem = this._states.pop();
    if (removedItem) return removedItem;
    throw new Error("there is no history");
  }
}

export default History;
