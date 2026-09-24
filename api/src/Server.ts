import express from "express";
import { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import MainRouter from "./router/Router.ts";
import Database from "./db/Database.ts";

export class Server {
  app: Express;
  router: MainRouter;

  port: number;
  host: string;
  protocol: string;

  db: Database;

  constructor(port: number, host: string) {
    this.app = express();
    this.port = port;
    this.host = host;
    this.protocol = "http";
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening to ${this.host}:${this.port}`);
    });
    return this;
  }

  setupMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    return this;
  }

  setupProtocol(secure: boolean) {
    this.protocol = secure ? "https" : "http";
    return this;
  }

  plugDB() {
    this.db = new Database();
    this.db.setupDB();
    return this;
  }

  plugRouter() {
    this.router = new MainRouter();
    this.router.plugDB(this.db).setupControllers();
    this.router.connectRouter(this.app);
    return this;
  }
}
