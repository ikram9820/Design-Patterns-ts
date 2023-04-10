import Command from "./fx/Command";

class ResizeCommand implements Command {
  execute(): void {
    console.log("resized.");
  }
}

export default ResizeCommand;
