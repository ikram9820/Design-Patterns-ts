import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

class Logger extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    console.log(`username "${request.username} is looged to console"`);
    return false;
  }
}

export default Logger;
