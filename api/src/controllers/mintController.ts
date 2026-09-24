import { Request, Response } from "express";
import Database from "../db/Database.ts";

export default class MintController {

  #db: Database;

  constructor(config: {db: Database}) {
    this.#db = config.db;
  }

  addNFTData = async (req: Request, res: Response) => {
    const { id, url} = req.body;
    console.log(`ID: ${id}, URL: ${url}`);
    // TODO: add database interaction
    res.json({
      success: true,
      message: "Mint was successful"
    }).status(200);
  }
  
}