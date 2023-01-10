import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userLogRoutes from "../routers/userLogRoutes";
import loginUser from "../routers/login";
import randomUser from "../routers/randomUser";
import statusCode from "../routers/statusCode";
import listUser from "../routers/listUser";

const app = express();

app.use(express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

app.use("/userLogRoutes", userLogRoutes);
app.use("/loginUser", loginUser);
app.use("/randomUser", randomUser);
app.use("/statusCode", statusCode);
app.use("/listUser", listUser);

const DB_USER = "sharenergy";
const DB_PASSWORD = encodeURIComponent("UO30JjLCfwhFeFD6");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@pabloliverfe.gbsk9c3.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 5080, () => {
      console.log("VOCE ESTA CONECTADO EM http://localhost:5080/");
    });
  })
  .catch((error) => console.log("Erro ao conectar o servidor!", error.message));
