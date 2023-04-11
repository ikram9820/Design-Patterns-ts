import StatusBar from "./StatusBar";
import Stock from "./Stock";
import StockListView from "./StockList";

let dollor = new Stock("$", 279);
let erro = new Stock("@", 379);

let bar = new StatusBar();
bar.addStock(dollor);

let list = new StockListView();
list.addStock(dollor);
list.addStock(erro);

dollor.addObserver(bar)
dollor.addObserver(list)
erro.addObserver(list)
// dollor.notifyObservers();
dollor.price = 321
erro.notifyObservers()