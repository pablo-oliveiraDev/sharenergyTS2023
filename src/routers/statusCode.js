"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const buffer_1 = require("buffer");
const router = (0, express_1.Router)();
let responseType = {
    ResponseType: "arraybuffer",
};
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const numImage = req.query.numImage;
    if (!numImage) {
        res.send(`<image src="https://http.cat/404" />`);
        return;
    }
    yield axios_1.default
        .get(`https://http.cat/${numImage}`, {
        responseType: "arraybuffer",
    })
        .then((response) => {
        const buffer64 = buffer_1.Buffer.from(response.data, "binary").toString("base64");
        let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
        let imgFile = `<img src="${image}" />`;
        res.status(200).send(image);
    })
        .catch((error) => {
        axios_1.default.get(`https://http.cat/${407}`, {
            responseType: "arraybuffer",
        })
            .then((response) => {
            const buffer64 = buffer_1.Buffer.from(response.data, "binary").toString("base64");
            let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
            let imgFile = `<img src="${image}" />`;
            res.status(200).send(image);
        });
    });
}));
exports.default = router;
