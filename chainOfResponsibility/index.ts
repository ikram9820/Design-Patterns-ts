import Authenticator from "./Authenticator";
import HttpRequest from "./HttpRequest";
import Logger from "./Logger";
import WebServer from "./WebServer";

let logger = new Logger(null);
let auth = new Authenticator(logger);

let webServer = new WebServer(auth);

webServer.handle(new HttpRequest("admin", "1234"));
