import Document from "./Document";
import History from "./History";

let docs = new Document();
let history = new History();

docs.content = "hi I am ikram khan.";
history.push(docs.createState());
docs.fontName = "roberto";
history.push(docs.createState());
docs.fontSize = 20;
console.log(docs.toString());

try {
    
    docs.restore(history.pop());
    console.log(docs.toString());
    docs.restore(history.pop());
    console.log(docs.toString());
    docs.restore(history.pop());
    console.log(docs.toString());
    
} catch (error) {
    if(error instanceof Error)
 console.log(error.message)   
}
