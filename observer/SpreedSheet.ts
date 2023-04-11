import DataSource from "./DataSource";
import Observer from "./Observer";

class SpreedSheet implements Observer {
  constructor(private _dataSource: DataSource) {}
  update(): void {
    console.log(
      `spreed sheet notified with ${this._dataSource.value} from data source`
    );
  }
}

export default SpreedSheet;
