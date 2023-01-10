import {  Request, Response } from "express";
import userLog from "../models/db_userLog";

const LoginController = {
  async index(req: Request, res: Response) {
    let data = req.body;
    const response = await userLog.find();
    let user = response.filter((u) => {
      return u.user_name === data.user_name && u.senha === data.senha;
    });
    if (user.length > 0 && !!user) {
      try {
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    } else {
      res.status(404).json({ message: "Usario e senha nao encontrado" });
    }
  },
};
export default LoginController;
