import { Router } from "express";
import { UserController } from "../controller/Controller.js";

const router = Router();
const userController = new UserController();

router.get("/users", (req, res) => userController.getAll(req, res));
router.post("/users", (req, res) => userController.add(req, res));
router.put("/users/:id", (req, res) => userController.update(req, res));
router.delete("/users/:id", (req, res) => userController.delete(req, res));

export default router;
