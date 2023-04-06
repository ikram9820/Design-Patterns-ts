import Editor from "./Editor";
import History from "./History";

let editor = new Editor();
let history = new History();

editor.content = "ikram";
history.push(editor.createState());

editor.content ="khan";
history.push(editor.createState());

editor.content="kako";
history.push(editor.createState());
console.log(editor.content);
