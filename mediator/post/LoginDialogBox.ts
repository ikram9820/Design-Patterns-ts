import Button from "./Button";
import DialogBox from "./DialogBox";
import TextBox from "./TextBox";
import UIControl from "./UIControl";

class LoginDialogBox implements DialogBox {
  public loginButton = new Button(this);
  public emailText = new TextBox(this);
  public passwordText = new TextBox(this);
 
  changed(control: UIControl): void {
    if (control === this.emailText || control === this.passwordText)
      this.isValidForm();
  }
  private isValidForm() {
    this.loginButton.isEnabled =
      !this.emailText.isEmpty && !this.passwordText.isEmpty;
  }
}
export default LoginDialogBox;
