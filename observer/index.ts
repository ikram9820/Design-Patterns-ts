import Chart from "./Chart";
import DataSource from "./DataSource";
import SpreedSheet from "./SpreedSheet";

let  data = new DataSource()
data.addObserver(new Chart(data));
data.addObserver(new SpreedSheet(data));

data.value = 9;
data.notifyObservers();