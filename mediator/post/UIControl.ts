import DialogBox from "./DialogBox";

abstract class UIControl {
  constructor(protected _owner: DialogBox) {}
}

export default UIControl;
