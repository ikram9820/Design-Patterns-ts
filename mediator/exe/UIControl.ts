import EventHandler from "./EventHandler";

abstract class UIConrol {
  private _eventHandlers: EventHandler[] = [];

  public addEventHandler(handler: EventHandler) {
    this._eventHandlers.push(handler);
  }
  protected notifyEventHandler() {
    this._eventHandlers.forEach((handler) => handler.handle());
  }
}
export default UIConrol;
