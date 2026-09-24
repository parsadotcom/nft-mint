import { Request, Response } from "express";
import Database from "../db/Database.ts";

export default class MintController {

  #db: Database;

  constructor(config: {db: Database}) {
    this.#db = config.db;
  }

  handleMint = async (req: Request, res: Response) => {
    const { id, url} = req.body;
    console.log(`ID: ${id}, URL: ${url}`);
    await this.#db.addNFTData(id, url);
    res.json({
      success: true,
      message: "Mint was successful"
    }).status(200);
  }
  
}