import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

class Authenticator extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    let isValid = request.username === "admin" && request.password === "1234";
    console.log("authenticated")
    return !isValid;
  }
}
export default Authenticator;