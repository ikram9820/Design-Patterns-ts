import BoldCommand from "./BoldCommand";
import History from "./History";
import HtmlDocument from "./HtmlDocument";
import UndoCommand from "./UndoCommand";

let document = new HtmlDocument();
let history = new History();
document.content = "hello world";

let bold = new BoldCommand(history, document);
bold.execute();
console.log(document.content);

let undo = new UndoCommand(history);
undo.execute();
console.log(document.content);
