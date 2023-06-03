import { json, Request, Response } from "express";
import userLog from "../models/db_userLog";
const userLogController = {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      let userRoutes = await userLog.find();
      return res.status(200).json(userRoutes);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  async post(req: Request, res: Response) {
    const data = req.body;
    const response = await userLog.find();
    const user = response.filter((u) => {
      return u.user_name === data.user_name;
    });
    if (user === undefined || user.length === 0) {
      await userLog.create(data);
      try {
        res.status(201).json({ message: "User criado com sucesso!" });
      } catch (error) {
        res.status(500).json({ error: error });
      }
    } else {
      res.status(500)
        .json({ message: "Já existe um usuário criado com esse email" });
    }
  },
  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const response = await userLog.find();
    const user = response.filter((u) => {
      return u._id.toHexString() === id;
    });

    if (!!id && !!user && user.length > 0) {
      await userLog.deleteOne({ _id: id });
      try {
        res.status(200).json({ message: "Usuário deletado com sucesso!" });
      } catch (error) {
        res.status(500).json({ message: error });
      }
    } else {
      res.status(404).json({ message: "Usuario não existe" });
    }
  },

};
export default userLogController;
