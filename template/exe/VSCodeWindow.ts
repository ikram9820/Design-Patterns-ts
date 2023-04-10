import Window from "./Window";

class VSCodeWindow extends Window {
  protected doBeforeClose(): void {
    console.log("Are you sure to close VSCode?");
  }
  protected doAfterClose(): void {
    console.log("VSCode data is saved.");
  }
}

export default VSCodeWindow;