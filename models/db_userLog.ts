import mongoose, { Schema } from "mongoose";

const db_userLog = new Schema(
  {
    nome: String,
    user_name: String,
    email: String,
    senha: String,
    cpf: String,
    telefone: String,
    tipo: String,
  },
  { timestamps: true }
);
export default mongoose.model('userLog',db_userLog);
