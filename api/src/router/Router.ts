import { Router } from "express";
import { mintController } from "../controllers/mintController.ts";
import { MINT_ROUTE } from "./routes.ts";

export default class MainRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  setupControllers() {
    this.router.use(MINT_ROUTE, mintController);
    return this;
  }
}
