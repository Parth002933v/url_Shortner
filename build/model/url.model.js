"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const urlSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
exports.UrlModel = mongoose_1.default.model("url", urlSchema);
