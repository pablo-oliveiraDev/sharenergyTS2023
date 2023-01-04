import { Router } from "express";
import DB_userLog from "../models/db_userLog";
import userLogController from "../controllers/userLogController";

const router = Router();

router.get("/", userLogController.index);

router.post("/", async (req, res) => {
  const data = req.body;
  const response = await DB_userLog.find();
  const user = response.filter((u) => {
    return u.email === data.email;
  });
  if (user === undefined || user.length === 0) {
    await DB_userLog.create(data);
    try {
      res.status(201).json({ message: "User criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res
      .status(500)
      .json({ message: "Já existe um usuário criado com esse email" });
    return;
  }
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await DB_userLog.find();
  const user = response.filter((u) => {
    return u._id.toHexString() === id;
  });

  if (!!id && !!user) {
    await DB_userLog.deleteOne({ _id: id });
    try {
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res.status(404).json({ message: "Usuario não existe" });
  }
});

export default router;
