import { timeStamp } from "console";
import { access } from "fs";
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      require: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      require: true,
      unique: true,
    },
    visitHistory: [{ timeStamp: { type: Number } }],
  },
  {
    timestamps: true,
  }
);

export const UrlModel = mongoose.model("url", urlSchema);
