import Tool from "./Tool";

class Canvas {
  constructor(private _currentTool: Tool) {}

  public mouseDown() {
    this._currentTool.mouseDown();
  }

  public mouseUp() {
    this._currentTool.mouseUp();
  }

  public get currentTool(): Tool {
    return this._currentTool;
  }
  public set currentTool(value: Tool) {
    this._currentTool = value;
  }
}

export default Canvas;
