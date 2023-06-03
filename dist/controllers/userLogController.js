"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_userLog_1 = __importDefault(require("../models/db_userLog"));
const userLogController = {
    async index(req, res) {
        try {
            let userRoutes = await db_userLog_1.default.find();
            return res.status(200).json(userRoutes);
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    },
    async post(req, res) {
        const data = req.body;
        const response = await db_userLog_1.default.find();
        const user = response.filter((u) => {
            return u.user_name === data.user_name;
        });
        if (user === undefined || user.length === 0) {
            await db_userLog_1.default.create(data);
            try {
                res.status(201).json({ message: "User criado com sucesso!" });
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        }
        else {
            res.status(500)
                .json({ message: "Já existe um usuário criado com esse email" });
        }
    },
    async delete(req, res) {
        const id = req.params.id;
        const response = await db_userLog_1.default.find();
        const user = response.filter((u) => {
            return u._id.toHexString() === id;
        });
        if (!!id && !!user && user.length > 0) {
            await db_userLog_1.default.deleteOne({ _id: id });
            try {
                res.status(200).json({ message: "Usuário deletado com sucesso!" });
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }
        else {
            res.status(404).json({ message: "Usuario não existe" });
        }
    },
};
exports.default = userLogController;
