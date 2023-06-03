"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    let num = req.query.results;
    await axios_1.default
        .get(`https://randomuser.me/api/?results=${num}`)
        .then((response) => {
        let data = response.data.results;
        let newData = Object.values(data).map((u) => {
            return {
                name: u.name.first + " " + u.name.last,
                foto: u.picture.large,
                email: u.email,
                username: u.login.username,
                idade: u.dob.age,
            };
        });
        res.status(200).json(newData);
    })
        .catch((error) => {
        res.status(400).json({ message: error });
    });
});
exports.default = router;
