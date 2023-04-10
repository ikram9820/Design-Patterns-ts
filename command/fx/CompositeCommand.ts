import Command from "./fx/Command";

class CompositeCommand implements Command {
  private _commands: Command[] = [];

  public addCommand(command: Command) {
    this._commands.push(command);
  }

  execute(): void {
    this._commands.forEach((command) => command.execute());
  }
}

export default CompositeCommand;
