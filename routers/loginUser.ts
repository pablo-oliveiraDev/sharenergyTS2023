import { Router } from "express";
import userLogController from "../controllers/userLogController";

const router = Router();

router.get("/", userLogController.index);




export default router;