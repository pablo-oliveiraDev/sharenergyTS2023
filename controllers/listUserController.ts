import { json, Request, Response } from "express";
import listUser from "../models/db_listUser";

const listUserController = {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      let userRoutes = await listUser.find();
      return res.status(200).json(userRoutes);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  async post(req: Request, res: Response) {
    const data = req.body;
    const response = await listUser.find();
    const user = response.filter((u) => {
      return u.nome === data.nome;
    });
    if (user === undefined || user.length === 0) {
      await listUser.create(data);
      try {
        res.status(201).json({ message: "User criado com sucesso!" });
      } catch (error) {
        res.status(500).json({ message: 'Houve um erro inesperado!' });
      }
    } else {
      res.status(500).json({ message: "Já existe um usuário criado com esse nome" });
    }
  },
  async patch(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body;

    const response = await listUser.find();
    const user = response.filter((u) => {
      return u._id.toHexString() === id;
    });
    if (!!id && !!user && user.length > 0) {
      await listUser.updateOne({ _id: id }, data);
      try {
        res.status(200).json({ message: "Usuário atualizado com sucesso!" });
      } catch (error) {
        res.status(500).json({ message: error });
      }
    } else {
      res.status(404).json({ message: "Usuario não existe" });
    }
  },
  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const response = await listUser.find();
    const user = response.filter((u) => {
      return u._id.toHexString() === id;
    });

    if (!!id && !!user && user.length > 0) {
      await listUser.deleteOne({ _id: id });
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
export default listUserController;
