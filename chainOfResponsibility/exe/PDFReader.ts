import DataReader from "./DataReader";

class PDFReader extends DataReader {
  protected getExtension(): string {
    return ".pdf";
  }
  protected doRead(fileName: string): void {
    console.log(`Reading data from a ${fileName}`);
  }
}
export default PDFReader;
