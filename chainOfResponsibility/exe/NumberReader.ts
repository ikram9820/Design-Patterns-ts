import DataReader from "./DataReader";

class NumberReader extends DataReader {
  protected getExtension(): string {
    return ".number";
  }
  protected doRead(fileName: string) {
    console.log("Reading data from a Numbers spreadsheet: ");
  }
}
export default NumberReader;
