import express from 'express';

export class Server {
  app: any;
  port: number;
  host: string;

  constructor(port: number, host: string) {
    this.app = express();
    this.port = port;
    this.host = host;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening to ${this.host}:${this.port}`;)

    })
  }


}