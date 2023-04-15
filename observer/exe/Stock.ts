import Observable from "./Observable";
import Observer from "./Observer";

class Stock implements Observable {
  private _observers: Observer[] = [];

  constructor(private _symbol: string, private _price: number) {}
  public attach(observer: Observer) {
    this._observers.push(observer);
  }
  public detach(observer: Observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }
  public notify() {
    this._observers.forEach((obs) => obs.priceChanged());
  }
  public getPrice(): number {
    return this._price;
  }
  public setPrice(price: number) {
    this._price = price;
    this.notify();
  }
  public toString() {
    return "symbol=" + this._symbol + ", price= $" + this._price;
  }
}
export default Stock;
