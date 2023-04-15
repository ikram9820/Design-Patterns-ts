import Document from "./Document";
import DocumentHistory from "./DocumentHistory";

let document = new Document();
let history = new DocumentHistory();

document.content = "Design Patterns";
history.push(document.createState());
document.content = "Memento Patterns";
history.push(document.createState());
document.content = "Mediator Patterns";
console.log(document.content);

document.restore(history.pop());
console.log(document.content);
//Output
// Mediator Patterns
// Memento Patterns