import Compressor from "./Compressor";
import Filter from "./Filteter";

export default class ImageStorage {
  constructor(private _compressor: Compressor, private _filter: Filter) {}

  public store() {
    this._compressor.compress();
    this._filter.apply();
  }
}
