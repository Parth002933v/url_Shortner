import mongoose from "mongoose";
import { DB_NAME } from "./constant";

async function connectToDB() {
  console.log("connecting...");
  return mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
}

export { connectToDB };
  