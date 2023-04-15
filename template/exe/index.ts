import ChromeWindow from "./ChromeWindow";
import VSCodeWindow from "./VSCodeWindow";
import Window from "./Window";

let window: Window = new ChromeWindow();
window.close();
window = new VSCodeWindow();
window.close();

//Output
// Are you sure to close Chrome?
// Removing the window from the screen
// Chrome is closed.
// Are you sure to close VSCode?
// Removing the window from the screen
// VSCode data is saved.