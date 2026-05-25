import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controllers/todo.js";
const router = express.Router();
router.route("/create").post(createTodo);
router.route("/").get(getTodo);
router.route("/update/:id").patch(updateTodo);
router.route("/delete/:id").delete(deleteTodo);

export default router;
