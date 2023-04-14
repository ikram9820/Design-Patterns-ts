import UIControl from "./UIConrol";

interface DialogBox {
  changed(control: UIControl): void;
}
export default DialogBox;