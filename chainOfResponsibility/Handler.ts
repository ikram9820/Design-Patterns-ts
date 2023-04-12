import HttpRequest from "./HttpRequest";

abstract class Handler {
  constructor(private _next: Handler | null) {}

  public handle(request: HttpRequest) {
    if (this.doHandle(request)) return;
    if (this._next) this._next.handle(request);
  }
  protected abstract doHandle(request: HttpRequest): boolean;
}

export default Handler;
