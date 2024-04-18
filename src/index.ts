import express, { Express, Request, Response } from "express";
import { connectToDB } from "./connect";
import dotenv from "dotenv";
import URLrouter from "./routes/url";
import StaticRouter from "./routes/staticRoute";

const app: Express = express();
const post: Number = 3000;

dotenv.config({ path: ".env" });

connectToDB()
  .then(() => {
    console.log("Database Connected !");
  })
  .catch((err: Error) => {
    console.error("There is some error in MongoDB : ", err.message);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/urlShort", URLrouter);

app.get("/:shortId", StaticRouter);

app.listen(post, () => {
  console.log("Server Started !");
});
