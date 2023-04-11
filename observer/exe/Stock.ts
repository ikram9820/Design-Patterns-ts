import Observable from "./Observable";
import Observer from "./Observer";

class Stock implements Observable {
  private _observers: Observer[] = [];
  constructor(private _symbol: string, private _price: number) {}
  addObserver(observer: Observer): void {
    this._observers.push(observer);
  }
  removeObserver(observer: Observer): void {
    this._observers.filter((obs) => obs !== observer);
  }
  notifyObservers(): void {
    this._observers.forEach((obs) => obs.show());
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }

  public toString() {
    return "Stock{ symbol=" + this._symbol + ", price=" + this._price + "}";
  }
}

export default Stock;
