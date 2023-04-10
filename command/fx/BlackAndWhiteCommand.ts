import Command from "./fx/Command";

class BlackAndWhiteCommand implements Command {
  execute(): void {
    console.log("Black and White filter applied");
  }
}

export default BlackAndWhiteCommand;
