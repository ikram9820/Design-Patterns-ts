import StatusBar from "./StatusBar";
import Stock from "./Stock";
import StockListView from "./StockListView";

var statusBar = new StatusBar();
var stockListView = new StockListView();
var ethereum = new Stock("eth", 2100);
var bnb = new Stock("bnb", 300);
var dogeCoin = new Stock("doge", 0.08);

statusBar.addStock(dogeCoin);
stockListView.addStock(ethereum);
stockListView.addStock(bnb);
stockListView.addStock(dogeCoin);

ethereum.setPrice(2150);
// Output
// Price Changed - Refreshing StockListView
// Stock List View
// symbol=eth, price= $2150
// symbol=bnb, price= $300
// symbol=doge, price= $0.08