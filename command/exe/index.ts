import History from "./History";
import SetTextCommand from "./SetTextCommand";
import UndoCommand from "./UndoCommand";
import VideoEditor from "./VideoEditor";

let videoEditor = new VideoEditor();
let history = new History();

let setText = new SetTextCommand("this is my first blog", history, videoEditor);
setText.execute();
let setText2 = new SetTextCommand("this is my second blog", history, videoEditor);
setText2.execute();
console.log(videoEditor.toString());


console.log(videoEditor.toString());

let undo = new UndoCommand(history);
undo.execute();
undo.execute();
console.log(videoEditor.toString());
