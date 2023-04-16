//index.ts
import StatusBar from "./StatusBar";
import Stock from "./Stock";
import StockListView from "./StockListView";

var statusBar = new StatusBar();
var stockListView = new StockListView();
var stock1 = new Stock("s1", 2100);
var stock2 = new Stock("s2", 300);
var stock3 = new Stock("s3", 80);

statusBar.addStock(stock3);
stockListView.addStock(stock1);
stockListView.addStock(stock2);
stockListView.addStock(stock3);

stock1.setPrice(2150);
// Output
// Price Changed - Refreshing StockListView
// Stock List View
// symbol=s1, price= $2150
// symbol=s2, price= $300
// symbol=s3, price= $80
