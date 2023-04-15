import LoginDialogBox from "./LoginDialogBox";

let form = new LoginDialogBox();
console.log("Initially Login Button isEnabled: " + form.loginButton.isEnabled);
form.emailText.content = "email";
console.log("After setting the email: " + form.loginButton.isEnabled);
form.passwordText.content = "password";
console.log("After setting the password: " + form.loginButton.isEnabled);
form.emailText.content = "";
console.log("After removing the email: " + form.loginButton.isEnabled);

// Output
// Initially Login Button isEnabled: false
// After setting the email: false
// After setting the password: true
// After removing the email: false