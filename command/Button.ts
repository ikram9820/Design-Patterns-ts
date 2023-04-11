import Command from "./fx/Command";

class Button {
  constructor(private _command: Command) {}

  public click() {
    this._command.execute();
  }
}

export default Button;
