import express, { Request, Response } from "express";
import { UrlModel } from "../model/url.model";
import { HandleCreateShortID } from "../controller/url.controller";
import { HandleRedirectURL } from "../controller/static.controller";

const router = express.Router();

router.get("/:shortURL", HandleRedirectURL);

export default router;
