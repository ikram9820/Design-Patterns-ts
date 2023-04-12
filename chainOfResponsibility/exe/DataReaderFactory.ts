import DataReader from "./DataReader";
import PDFReader from "./PDFReader";
import PowerPointReader from "./PowerPointReader";
import WordReader from "./WordReader";

class DataReaderFactory {
  public static getDataReaderChain(): DataReader {
    var wordReader = new WordReader(null);
    var powerPointReader = new PowerPointReader(null);
    var pdfReader = new PDFReader(null);

    // pdfReader.next = powerPointReader;
    // powerPointReader.next = wordReader;

    return pdfReader;
  }
}

export default DataReaderFactory;