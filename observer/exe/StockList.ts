import Observer from "./Observer";
import Stock from "./Stock";
class StockListView implements Observer {
  private _stocks: Stock[] = [];

  public addStock(stock: Stock) {
    this._stocks.push(stock);
  }

  public show() {
    console.log("This is Stock List");
    this._stocks.forEach((stock) => console.log(stock.toString()));
  }
}
export default StockListView;
