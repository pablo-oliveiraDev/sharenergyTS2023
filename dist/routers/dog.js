"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
let responseType = {
    ResponseType: "arraybuffer",
};
router.get("/", async (req, res) => {
    await axios_1.default.get('https://random.dog/woof.json')
        .then((response) => {
        res.send(response.data.url);
    });
});
exports.default = router;
