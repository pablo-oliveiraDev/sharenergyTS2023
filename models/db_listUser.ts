import mongoose, { Schema } from "mongoose";

const db_listUser = new Schema(
  {
    nome: String,
    email: String,
    cpf: String,
    telefone: String,
    cep: String,
    cidade: String,
    rua: String,
    complemento: String,
    numero: String,

  },
  { timestamps: true }
);
export default mongoose.model('listUser', db_listUser);
