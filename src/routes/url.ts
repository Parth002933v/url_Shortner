import express, { Request, Response } from "express";
import { HandleCreateShortID } from "../controller/url.controller";

const router = express.Router();

router.post("/", HandleCreateShortID);

export default router;
