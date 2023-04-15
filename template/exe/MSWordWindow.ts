import Window from "./Window";

class MSWordWindow extends Window {
  protected closing(): void {
    console.log("Are you sure to close MS word?");
  }
  protected closed(): void {
    console.log("MS word data is saved.");
  }
}

export default MSWordWindow;
