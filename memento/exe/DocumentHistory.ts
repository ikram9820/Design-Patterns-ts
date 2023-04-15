import DocumentState from "./DocumentState";

class DocumentHistory {
  private _states: DocumentState[] = [];

  public push(state: DocumentState) {
    this._states.push(state);
  }
  public pop(): DocumentState {
    return this._states.pop() as DocumentState;
  }
}
export default DocumentHistory;
