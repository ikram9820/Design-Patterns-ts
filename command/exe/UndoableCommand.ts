import Command from "./Command";
interface UndoableCommand extends Command {
  unexecute(): void;
}
export default UndoableCommand;
