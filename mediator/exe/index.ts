import SignUpDialogBox from "./SignUpDialogBox";

let form = new SignUpDialogBox();
// Initially the button should be disabled
console.log("Initially: " + form.signUpBtn.isEnabled);
// The user enters their username, the button is still disabled
form.username.content = "username";
console.log("After setting the username: " + form.signUpBtn.isEnabled);
// The user enters their password, the button is still disabled
form.password.content = "password";
console.log("After setting the password: " + form.signUpBtn.isEnabled);
// The agrees to the terms, the button becomes enabled
form.agreeToTerms.isChecked = true;
console.log("After agreeing to terms: " + form.signUpBtn.isEnabled);
// The user removes the password, the button becomes disabled
form.password.content = "";
console.log("After removing the password: " + form.signUpBtn.isEnabled);
// The user enters the password again, the button becomes enabled
form.password.content = "password";
console.log("After re-setting the password: " + form.signUpBtn.isEnabled);
