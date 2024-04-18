"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleCreateShortID = void 0;
const nanoid_1 = require("nanoid");
const url_model_1 = require("../model/url.model");
function HandleCreateShortID(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const body = req.body;
      if (!body.url) return res.status(400).json({ error: "url is required" });
      const shortID = (0, nanoid_1.nanoid)();
      yield url_model_1.UrlModel.create({
        shortID: "shortID",
        redirectURL: body.url,
        visitHistory: [],
      });
      return res.status(201).json({ success: true, shortID: "npm i shortid" });
    } catch (error) {
      console.error("Error creating short URL:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
}
exports.HandleCreateShortID = HandleCreateShortID;
