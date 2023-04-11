import Observer from "./Observer";
import Stock from "./Stock";

class StatusBar implements Observer {
  private _stocks: Stock[] = [];

  public addStock(stock: Stock) {
    this._stocks.push(stock);
  }

  public show() {
    console.log("This is Status Bar");
    this._stocks.forEach((stock) => console.log(stock.toString()));
  }
}

export default StatusBar;
