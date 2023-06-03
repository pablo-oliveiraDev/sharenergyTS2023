"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listUserController_1 = __importDefault(require("../controllers/listUserController"));
const router = (0, express_1.Router)();
router.get("/", listUserController_1.default.index);
router.post("/", listUserController_1.default.post);
router.delete("/:id", listUserController_1.default.delete);
router.patch("/:id", listUserController_1.default.patch);
exports.default = router;
