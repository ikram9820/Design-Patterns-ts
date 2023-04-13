import Button from "./Button";
import Clipboard from "./Clipboard";
import CopyCommand from "./CopyCommand";
import CutCommand from "./CutCommand";
import Editor from "./Editor";
import PasteCommand from "./PasteCommand";

let editor1 = new Editor();
let editor2 = new Editor();
let clipboard = new Clipboard();

let copyButton = new Button(new CopyCommand(editor1, clipboard));
editor1.setText("This is editor1 content");
copyButton.click();

console.log("editor2 content(before paste): ", editor2.getText());
let pasteButton = new Button(new PasteCommand(editor2, clipboard));
pasteButton.click();
console.log("editor2 content(after paste): ", editor2.getText());

let cutButton = new Button(new CutCommand(editor2, clipboard));
cutButton.click();
console.log("editor2 content(after cut): ", editor2.getText());

//output
// editor2 content(before paste):
// editor2 content(after paste):  This is editor1 content
// editor2 content(after cut):