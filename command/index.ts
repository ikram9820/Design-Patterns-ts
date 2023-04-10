import AddCustomerCommand from "./AddCustomerCommand";
import BlackAndWhiteCommand from "./BlackAndWhiteCommand";
import CompositeCommand from "./CompositeCommand";
import CustomerService from "./CustomerService";
import ResizeCommand from "./ResizeCommand";
import Button from "./fx/Button";

// let service = new CustomerService();
// let command = new AddCustomerCommand(service);
// let button = new Button(command);
// button.click();

let commands = new CompositeCommand();

commands.addCommand(new BlackAndWhiteCommand());
commands.addCommand(new ResizeCommand());

commands.execute();
