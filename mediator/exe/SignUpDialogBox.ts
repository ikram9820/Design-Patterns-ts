import Button from "./Button";
import CheckBox from "./CheckBox";
import TextBox from "./TextBox";

class SignUpDialogBox {
  public username = new TextBox();
  public password = new TextBox();
  public agreeToTerms = new CheckBox();
  public signUpBtn = new Button();
  constructor() {
    this.username.addEventHandler({ handle: () => this.controlChanged() });
    this.password.addEventHandler({ handle: () => this.controlChanged() });
    this.agreeToTerms.addEventHandler({ handle: () => this.controlChanged() });
  }
  private controlChanged() {
    this.signUpBtn.isEnabled = this.isFormValid();
  }
  private isFormValid() {
    return (
      !this.username.isEmpty &&
      !this.password.isEmpty &&
      this.agreeToTerms.isChecked
    );
  }
}
export default SignUpDialogBox;