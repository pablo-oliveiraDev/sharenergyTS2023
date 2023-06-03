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
;
let data1 = {
    nome: generate(),
    user_name: generate(),
    email: generate(),
    senha: generate(),
    cpf: generate(),
    telefone: generate(),
};
(0, globals_1.describe)("Teste simples", () => {
    it("teste verificacao get", async function () {
        let res = await axios_1.default.get("http://localhost:5080/userLogRoutes");
        (0, globals_1.expect)(res.status).toBe(200);
    });
});
(0, globals_1.describe)("Teste simples de post", () => {
    it("teste verificacao de status e dados cadastrados", async function () {
        await axios_1.default
            .post("http://localhost:5080/userLogRoutes/", data1)
            .then((res) => {
            (0, globals_1.expect)(res.status).toBe(201);
        });
        const res = await axios_1.default.get("http://localhost:5080/userLogRoutes");
        let getUsers = res.data;
        let userPost = getUsers.filter((usr) => {
            return usr.user_name === data1.user_name;
        });
        (0, globals_1.expect)(data1).toEqual({
            nome: userPost[0].nome,
            user_name: userPost[0].user_name,
            email: userPost[0].email,
            cpf: userPost[0].cpf,
            senha: userPost[0].senha,
            telefone: userPost[0].telefone,
        });
    });
});
(0, globals_1.describe)("teste delete user", () => {
    it("verificação de persistencia e status", async function () {
        let res = await axios_1.default.get("http://localhost:5080/userLogRoutes");
        let getUsers = res.data;
        let userPost = getUsers.filter((u) => {
            return u.user_name === data1.user_name;
        });
        let response = await axios_1.default.delete(`http://localhost:5080/userLogRoutes/${userPost[0]._id}`);
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.data).not.toBe({
            _id: userPost[0]._id,
        });
    });
});
