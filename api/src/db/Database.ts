import { Db, MongoClient } from "mongodb";
import "dotenv/config";

export default class Database {
  #client: MongoClient;
  #db: Db;

  constructor() {
    this.#client = new MongoClient(process.env.STRING || "");
  }

  async setupDB() {
    this.#db = this.#client.db("mint-nft");
    return this;
  }

  async addNFTData(tokenId: number, url: string) {
    await this.#db.collection("nfts").insertOne({ tokenId, url});
    return true;
  }
}
