"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_userLog_1 = __importDefault(require("../models/db_userLog"));
const LoginController = {
    async index(req, res) {
        let data = req.body;
        const response = await db_userLog_1.default.find();
        let user = response.filter((u) => {
            return u.user_name === data.user_name && u.senha === data.senha;
        });
        if (user.length > 0 && !!user) {
            try {
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        }
        else {
            res.status(404).json({ message: "Usario e senha nao encontrado" });
        }
    },
};
exports.default = LoginController;
