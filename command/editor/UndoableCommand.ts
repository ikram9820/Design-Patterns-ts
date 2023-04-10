import Command from "./Command";

interface UndoableCommand extends Command {
  unExecute(): void;
}

export default UndoableCommand;
