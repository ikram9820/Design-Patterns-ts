import DataReader from "./DataReader";

class WordReader extends DataReader {
  protected getExtension(): string {
    return ".docs";
  }
  protected doRead(fileName: string): void {
    console.log(`Reading data from a ${fileName}`);
  }
}
export default WordReader;
