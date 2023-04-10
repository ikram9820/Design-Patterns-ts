abstract class Window {
  public close() {
    this.doBeforeClose();
    console.log("Removing the window from the screen");
    this.doAfterClose();
  }

  protected abstract doBeforeClose(): void;
  protected abstract doAfterClose(): void;
}

export default Window;
