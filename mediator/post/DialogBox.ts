import UIControl from "./UIControl";

interface DialogBox {
  changed(control: UIControl): void;
}
export default DialogBox;