"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const axios_1 = __importDefault(require("axios"));
const crypto_1 = __importDefault(require("crypto"));
const generate = () => {
    return crypto_1.default.randomBytes(20).toString("hex");
};
(0, globals_1.describe)("teste de login", () => {
    it("teste de retorno de status e retorno user logado", async function () {
        let data = {
            user_name: "desafiosharenergy",
            senha: "sh@r3n3rgy",
        };
        await axios_1.default.post("http://localhost:5080/loginUser", data)
            .then((response) => {
            (0, globals_1.expect)(response.status).toBe(200);
            (0, globals_1.expect)({
                user_name: response.data[0].user_name.toString(),
                senha: response.data[0].senha
            }).toEqual(data);
        });
    });
});
