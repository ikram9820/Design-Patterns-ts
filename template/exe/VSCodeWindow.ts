import Window from "./Window";

class VSCodeWindow extends Window {
  protected closing(): void {
    console.log("Are you sure to close VSCode?");
  }
  protected closed(): void {
    console.log("VSCode data is saved.");
  }
}

export default VSCodeWindow;
