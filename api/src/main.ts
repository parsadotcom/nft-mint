import "dotenv/config";
import { Server } from "./Server.ts";

const server: Server = new Server(3344, "localhost");
server.setupMiddlewares().setupProtocol(false).plugDB().plugRouter().listen();