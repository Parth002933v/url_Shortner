import { customAlphabet, nanoid } from "nanoid";
import { UrlModel } from "../model/url.model";
import { Request, Response } from "express";
import { MongooseError } from "mongoose";

async function HandleCreateShortID(req: Request, res: Response) {
  try {
    const body = req.body;

    if (!body.url) {
      return res.status(400).json({ error: "URL is required" });
    } else {
      const shortNanoID = customAlphabet("abcdefghijklmnopqrstuvwxyz", 10);
      const alphabeticId = shortNanoID();

      await UrlModel.create({
        shortID: alphabeticId,
        redirectURL: body.url,
        visitHistory: [],
      });

      return res.status(200).send(`Your short URL ID is: ${alphabeticId}`);
    }
  } catch (error) {
    if (error instanceof MongooseError) {
      console.error("Error creating short URL:", error);
      return res.status(500).json({ error: "Internal server error" });
    } else {
      console.error("Unexpected error:", error);
      return res.status(500).json({ error: "Unexpected error occurred" });
    }
  }
}

export { HandleCreateShortID };
