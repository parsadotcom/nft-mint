import { Request, Response } from "express";

export const mintController = async (req: Request, res: Response) => {
  const { id, metadata} = req.body;
  console.log(`ID: ${id}, Metadata: ${metadata}`);
  res.json({
    success: true,
    message: "Mint was successful"
  }).status(200);
}