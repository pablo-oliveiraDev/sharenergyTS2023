import { Router } from "express";
import listUserController from "../controllers/listUserController";

const router = Router();

router.get("/", listUserController.index);

router.post("/", listUserController.post);

router.delete("/:id", listUserController.delete);

router.patch("/:id", listUserController.patch);

export default router;
