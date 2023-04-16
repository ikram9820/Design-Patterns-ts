//StatusBar.ts
import Observer from "./Observer";
import Stock from "./Stock";

class StatusBar implements Observer {
  private _stocks: Stock[] = [];

  public addStock(stock: Stock) {
    stock.attach(this);
    this._stocks.push(stock);
  }
  public show() {
    console.log("Status Bar");
    this._stocks.forEach((stock) => console.log(stock.toString()));
  }
  public priceChanged() {
    console.log("Price Changed - Refreshing StatusBar");
    this.show();
  }
}
export default StatusBar;
