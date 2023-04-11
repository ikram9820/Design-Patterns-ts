import DataSource from "./DataSource";
import Observer from "./Observer";

class Chart implements Observer {
  constructor(private _dataSource: DataSource) {}
  update(): void {
    console.log(
      `chart notified with ${this._dataSource.value} from data source`
    );
  }
}

export default Chart;
