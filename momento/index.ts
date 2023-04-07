import Editor from "./Editor";
import History from "./History";

let editor = new Editor();
let history = new History();

editor.content = "ikram";
history.push(editor.createState());

editor.content ="khan";
history.push(editor.createState());

editor.content="kako";

try{
editor.restore(history.pop());
editor.restore(history.pop());
editor.restore(history.pop());
console.log(editor.content);
}catch(error){
    if(error instanceof Error)
    console.warn(error.message)
}
