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
const LoginController = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            const response = yield db_userLog_1.default.find();
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
        });
    },
};
exports.default = LoginController;
