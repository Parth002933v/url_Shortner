import { Request, Response } from "express";
import { UrlModel } from "../model/url.model";

async function HandleRedirectURL(req: Request, res: Response) {
  try {
    const shortID = req.params.shortURL;

    const data = await UrlModel.findOneAndUpdate(
      {
        shortID,
      },
      {
        $push: {
          visitHistory: {
            timeStamp: Date.now(),
          },
        },
      }
    );

    if (data == null) {
      res.send("thre is no short url found");
    } else {
      res.redirect(data.redirectURL!);
    }
  } catch (error) {
    res.send(`thre is some error :  ${error}`);
  }
}

export { HandleRedirectURL };
