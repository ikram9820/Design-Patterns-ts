import Brush from "./Brush";
import Canvas from "./Canvas";
import Selection from "./Selection";

let canvas = new Canvas(new Selection());

canvas.mouseUp();
canvas.mouseUp();

canvas.currentTool = new Brush();

canvas.mouseUp();
canvas.mouseUp();
