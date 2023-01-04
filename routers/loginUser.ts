import { Router } from "express";


const router = Router();

const DB_userLog = require("../models/db_userLog");
router.get("/", async (req, res) => {
  const data = req.body;
  const response = await DB_userLog.find();
  const user = response.filter((u) => {
    return u.email === data.email && u.senha === data.senha;
  });
  if (user === undefined && user.length === 0) {
    res.status(500).json({ message: "Usario e senha nao encontrado" });
    return;
  }
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
export default router;
