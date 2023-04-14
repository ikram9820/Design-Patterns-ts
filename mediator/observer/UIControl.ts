import Observer from "./Observer";

abstract class UIConrol {
  private _observers: Observer[] = [];

  public attach(observer: Observer) {
    this._observers.push(observer);
  }
  protected notifyObservers() {
    this._observers.forEach((obs) => obs.update());
  }
}
export default UIConrol;
