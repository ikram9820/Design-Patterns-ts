import Tool from "./Tool";

class Selection implements Tool {
  mouseDown(): void {
    console.log("Selection Icon");
  }
  mouseUp(): void {
    console.log("Draw a dashed rectangle.");
  }
}

export default Selection