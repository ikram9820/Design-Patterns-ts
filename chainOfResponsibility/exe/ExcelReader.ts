import DataReader from "./DataReader";

class ExcelReader extends DataReader {
  protected getExtension(): string {
    return ".xls";
  }
  protected doRead(fileName: string): void {
    console.log("Reading data from an Excel spreadsheet.");
  }
}
export default ExcelReader;
