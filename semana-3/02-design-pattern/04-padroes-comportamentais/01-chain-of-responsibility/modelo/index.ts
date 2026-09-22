import CheckPasswordMiddleware from "./middlewares/CheckPasswordMiddleware.js";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware.js";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware.js";
import Server from "./servers/Server.js";

const server = new Server();
const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckPasswordMiddleware());

server.setMiddeware(middleware);

server.logIn("gustavo@mail.com", "123456");
