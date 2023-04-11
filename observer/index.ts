import Chart from "./Chart";
import DataSource from "./DataSource";
import SpreedSheet from "./SpreedSheet";

let  data = new DataSource()
data.addObserver(new Chart());
data.addObserver(new SpreedSheet());

data.value = 9;
data.notifyObservers();