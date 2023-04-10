import MSWordWindow from "./MSWordWindow";
import VSCodeWindow from "./VSCodeWindow";
import Window from "./Window";

let window: Window = new MSWordWindow();
window.close();
window = new VSCodeWindow();
window.close();
