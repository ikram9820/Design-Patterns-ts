import CustomerService from "./CustomerService";
import Command from "./Command";

class AddCustomerCommand implements Command {
  constructor(private _service: CustomerService) {}

  execute(): void {
    this._service.addCustomer();
  }
}

export default AddCustomerCommand;
