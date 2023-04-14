import LoginDialogBox from "./LoginDialogBox";

let login = new LoginDialogBox();
console.log("Initially Login Button isEnabled: " + login.loginButton.isEnabled);
login.emailText.content = "email";
console.log("After setting the email: " + login.loginButton.isEnabled);
login.passwordText.content = "password";
console.log("After setting the password: " + login.loginButton.isEnabled);
login.emailText.content = "";
console.log("After removing the email: " + login.loginButton.isEnabled);

// Output
// Initially Login Button isEnabled: false
// After setting the email: false
// After setting the password: true
// After removing the email: false