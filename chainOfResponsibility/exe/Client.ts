import DataReader from "./DataReader";

class Client {
  constructor(private _reader: DataReader) {}

  read(fileName: string) {
    this._reader.read(fileName);
  }
}
export default Client;
