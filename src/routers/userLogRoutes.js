"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userLogController_1 = __importDefault(require("../controllers/userLogController"));
const router = (0, express_1.Router)();
router.get("/", userLogController_1.default.index);
router.post("/", userLogController_1.default.post);
router.delete("/:id", userLogController_1.default.delete);
exports.default = router;
