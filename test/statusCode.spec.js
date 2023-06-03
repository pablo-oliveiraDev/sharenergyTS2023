"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const axios_1 = __importDefault(require("axios"));
const crypto_1 = __importDefault(require("crypto"));
const generate = () => {
    return crypto_1.default.randomInt(1, 999);
};
let num = generate();
(0, globals_1.describe)("teste status code http.cat", () => {
    it('teste de status ', async function () {
        console.log(num);
        await axios_1.default
            .get(`http://localhost:5080/statusCode/?numImage${num}`)
            .then((res) => {
            (0, globals_1.expect)(res.status).toBe(200);
        });
    });
});
