"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const axios_1 = __importDefault(require("axios"));
const crypto_1 = __importDefault(require("crypto"));
const generate = () => {
    return crypto_1.default.randomInt(1, 99);
};
let num = generate();
let result = generate();
(0, globals_1.describe)("Execução", () => {
    it("teste da api random users", async function () {
        await axios_1.default
            .get(`http://localhost:5080/randomUser/?results=${result}`)
            .then((res) => {
            (0, globals_1.expect)(res.status).toBe(200);
            let rdKey = res.data;
            let newRdKey = Object.values(rdKey).map((u) => {
                return {
                    name: u.name,
                };
            });
            (0, globals_1.expect)(result).toEqual(newRdKey.length);
        });
    });
});
