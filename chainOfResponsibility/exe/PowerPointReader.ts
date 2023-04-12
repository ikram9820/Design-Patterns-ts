import DataReader from "./DataReader";

class PowerPointReader extends DataReader {
  protected getExtension(): string {
    return ".ppt";
  }
  protected doRead(fileName: string): void {
    console.log(`Reading data from a ${fileName}`);
  }
}
export default PowerPointReader;
