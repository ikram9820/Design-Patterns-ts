import Window from "./Window";

class MSWordWindow extends Window {
  protected doBeforeClose(): void {
    console.log("Are you sure to close MS word?");
  }
  protected doAfterClose(): void {
    console.log("MS word data is saved.");
  }
}

export default MSWordWindow;
