"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./connect");
const dotenv_1 = __importDefault(require("dotenv"));
const url_1 = require("./routes/url");
const app = (0, express_1.default)();
const post = 2000;
dotenv_1.default.config({ path: ".env" });
(0, connect_1.connectToDB)()
    .then(() => {
    console.log("Database Connected !");
})
    .catch((err) => {
    console.error("There is some error in MongoDB : ", err.message);
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/url", url_1.router);
app.listen(post, () => {
    console.log("Server Started !");
});
