import Command from "./Command";
interface UndoableCommand extends Command {
  undo(): void;
}
export default UndoableCommand;
