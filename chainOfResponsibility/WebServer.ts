import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

class WebServer {
  constructor(private _handler: Handler) {}

  handle(request: HttpRequest) {
    this._handler.handle(request);
  }
}

export default WebServer;