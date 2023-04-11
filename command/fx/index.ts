import BlackAndWhiteCommand from "./BlackAndWhiteCommand";
import CompositeCommand from "./CompositeCommand";
import ResizeCommand from "./ResizeCommand";


let commands = new CompositeCommand();

commands.addCommand(new BlackAndWhiteCommand());
commands.addCommand(new ResizeCommand());

commands.execute();
