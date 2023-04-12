// import DataReaderFactory from "./DataReaderFactory";
// var reader = DataReaderFactory.getDataReaderChain();
// reader.read("data.docs");
// reader.read("data.pdf");
// reader.read("data.ppt");
// reader.read("data.pdf");

import Client from "./Client";
import PDFReader from "./PDFReader";
import PowerPointReader from "./PowerPointReader";
import WordReader from "./WordReader";

let wordReader = new WordReader(null);
let pdfReader = new PDFReader(wordReader);
let pptReader = new PowerPointReader(pdfReader);

let client = new Client(pptReader);
client.read("data.docs")
client.read("data.ppt")
client.read("data.docs")
