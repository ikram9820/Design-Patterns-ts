import Window from "./Window";

class ChromeWindow extends Window {
  protected closing(): void {
    console.log("Are you sure to close Chrome?");
  }
  protected closed(): void {
    console.log("Chrome is closed.");
  }
}
export default ChromeWindow;