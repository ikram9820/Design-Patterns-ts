import DataReader from "./DataReader";

class QuickBookReader extends DataReader {
  protected getExtension(): string {
    return ".qbw";
  }
  protected doRead(fileName: string) {
    console.log("Reading data from a QuickBooks file.");
  }
}
export default QuickBookReader;
