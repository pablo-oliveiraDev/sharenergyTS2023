import mongoose, { Schema } from "mongoose";

const db_userLog = new Schema(
  {
    user_name: String,
    senha: String  
  },
  { timestamps: true }
);
export default mongoose.model('userLog',db_userLog);
