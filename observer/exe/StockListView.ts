import Observer from "./Observer";
import Stock from "./Stock";
class StockListView implements Observer {
  private _stocks: Stock[] = [];

  public addStock(stock: Stock) {
    stock.attach(this);
    this._stocks.push(stock);
  }

  public show() {
    console.log("Stock List View");
    this._stocks.forEach((stock) => console.log(stock.toString()));
  }

  public priceChanged() {
    console.log("Price Changed - Refreshing StockListView");
    this.show();
  }
}

export default StockListView;
