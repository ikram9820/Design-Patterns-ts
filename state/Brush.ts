import Tool from "./Tool";

class Brush implements Tool {
  mouseDown(): void {
    console.log("Brush Icon");
  }
  mouseUp(): void {
    console.log("Draw line");
  }
}

export default Brush;
