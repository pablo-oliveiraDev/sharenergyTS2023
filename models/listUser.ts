import mongoose, { Schema } from "mongoose";

const db_listUser = new Schema(
  {
    nome: String,
    email: String,
    senha: String,
    cpf: String,
    telefone: String,
    tipo: String,
  },
  { timestamps: true }
);
export default mongoose.model('listUser',db_listUser);
