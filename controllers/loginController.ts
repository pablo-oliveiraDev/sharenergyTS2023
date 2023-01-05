import { json, Request, Response } from "express";
import userLog from "../models/db_userLog";
const LoginController = {
  async index(req: Request, res: Response) {
    const data = req.body;
    const response = await userLog.find();
    const user = response.filter((u) => {
      return u.user_name === data.user_name && u.senha === data.senha;
    });
    if (user === undefined && user ==='') {
      return
      res.status(500).json({ message: "Usario e senha nao encontrado" });
    }
    try {
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
export default LoginController;
