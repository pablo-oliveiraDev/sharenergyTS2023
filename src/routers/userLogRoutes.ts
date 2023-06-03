import { Router } from "express";
import userLogController from "../controllers/userLogController";

const router = Router();

router.get("/", userLogController.index);

router.post("/", userLogController.post);

router.delete("/:id", userLogController.delete);



export default router;
