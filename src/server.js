"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const userLogRoutes_1 = __importDefault(require("./routers/userLogRoutes"));
const login_1 = __importDefault(require("./routers/login"));
const randomUser_1 = __importDefault(require("./routers/randomUser"));
const statusCode_1 = __importDefault(require("./routers/statusCode"));
const listUser_1 = __importDefault(require("./routers/listUser"));
const dog_1 = __importDefault(require("./routers/dog"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/userLogRoutes", userLogRoutes_1.default);
app.use("/loginUser", login_1.default);
app.use("/randomUser", randomUser_1.default);
app.use("/statusCode", statusCode_1.default);
app.use("/dog", dog_1.default);
app.use("/listUser", listUser_1.default);
const DB_USER = "sharenergy";
const DB_PASSWORD = encodeURIComponent("UO30JjLCfwhFeFD6");
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@pabloliverfe.gbsk9c3.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
    app.listen(process.env.PORT || 5080, () => {
        console.log("VOCE ESTA CONECTADO EM http://localhost:5080/");
    });
})
    .catch((error) => console.log("Erro ao conectar o servidor!", error.message));
