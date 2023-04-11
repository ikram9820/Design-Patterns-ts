import AddCustomerCommand from "./AddCustomerCommand";
import CustomerService from "./CustomerService";
import Button from "./Button";

let service = new CustomerService();
let command = new AddCustomerCommand(service);
let button = new Button(command);
button.click();
