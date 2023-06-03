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
const db_userLog_1 = __importDefault(require("../models/db_userLog"));
const userLogController = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userRoutes = yield db_userLog_1.default.find();
                return res.status(200).json(userRoutes);
            }
            catch (error) {
                return res.status(500).json({ message: error });
            }
        });
    },
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const response = yield db_userLog_1.default.find();
            const user = response.filter((u) => {
                return u.user_name === data.user_name;
            });
            if (user === undefined || user.length === 0) {
                yield db_userLog_1.default.create(data);
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
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const response = yield db_userLog_1.default.find();
            const user = response.filter((u) => {
                return u._id.toHexString() === id;
            });
            if (!!id && !!user && user.length > 0) {
                yield db_userLog_1.default.deleteOne({ _id: id });
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
        });
    },
};
exports.default = userLogController;
