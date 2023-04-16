//Window.ts
abstract class Window {
  public close() {
    this.closing();
    console.log("Removing the window from the screen");
    this.closed();
  }

  protected abstract closing(): void;
  protected abstract closed(): void;
}
export default Window;
