import Observable from "./Observable";
import Observer from "./Observer";

class DataSource implements Observable {
  private _value = 0;
  private _observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this._observers.push(observer);
  }
  removeObserver(observer: Observer): void {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }
  notifyObservers(): void {
    this._observers.forEach((obs) => obs.update(this._value));
  }

  public get value() {
    return this._value;
  }
  public set value(value) {
    this._value = value;
  }
}

export default DataSource;
