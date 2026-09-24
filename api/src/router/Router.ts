import { Router } from "express";
import { MINT_ROUTE } from "./routes.ts";
import MintController from "../controllers/MintController.ts";
import Database from "../db/Database.ts";
import { Express } from "express";

export default class MainRouter {
  #router: Router;
  #db: Database;

  constructor() {
    this.#router = Router();
  }

  setupControllers() {
    const mintController = new MintController({ db: this.#db });
    this.#router.post(MINT_ROUTE, mintController.addNFTData);
    return this;
  }

  plugDB(db: Database) {
    this.#db = db;
    return this;
  }

  connectRouter(app: Express) {
    app.use("/", this.#router);
    return this;
  }


  
}
