import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware.js";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware.js";
import Server from "./servers/Server.js";

const server = new Server();
const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());

server.setMiddeware(middleware);

server.logIn("user@mail.com", "123456");
