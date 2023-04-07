import DocumentState from "./DocumentState";

class History {
  private _states: DocumentState[] = [];

  public push(state: DocumentState) {
    this._states.push(state);
  }

  public pop(): DocumentState {
    if (this._states.length === 0)
      throw new Error("There is no history, You cann't pop anymore");
    let index = this._states.length - 1;
    let state = this._states[index];
    this._states.pop();
    return state;
  }
}

export default History;
