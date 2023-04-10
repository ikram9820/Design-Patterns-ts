import History from "./History";
import RemoveCommand from "./RemoveCommand";
import UndoCommand from "./UndoCommand";
import VideoEditor from "./VideoEditor";

let videoEditor = new VideoEditor();
let history = new History();

videoEditor.text = "this is my first blog";
console.log(videoEditor.toString());

let remove = new RemoveCommand(videoEditor, history);
remove.execute();
console.log(videoEditor.toString());

let undo = new UndoCommand(history);
undo.execute();
console.log(videoEditor.toString());
