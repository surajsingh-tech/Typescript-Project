import type { RequestHandler } from "express";
import { TODOModule } from "../models/todo.js";
const TODO: TODOModule[] = [{ id: "123", text: "First Todo" }];
export const createTodo: RequestHandler = (req, res) => {
  try {
    console.log("00");
    
    // const text = (req.body as { text: "string" }).text;
    //or
    const text = (<{ text: string }>req.body).text;
    const newTodo = new TODOModule(Math.random().toString(), text);

    TODO.push(newTodo);

    res.status(201).json({
      message: "Todo Created",
      newTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Somthing went wrong",
    });
  }
};

export const getTodo: RequestHandler = (req, res) => {
  try {
    return res.status(200).json({
      TODO,
    });
  } catch (error) {
    res.status(500).json({
      message: "Somthing went wrong",
    });
  }
};

export const updateTodo: RequestHandler<{ id: "string" }> = (req, res) => {
  try {
    const id = (<{ id: string }>req.params).id;
    const { text } = <{ text: string }>req.body;

    const updateTodo = TODO.find((todo) => todo.id === id);

    if (!updateTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    updateTodo.text = text;

    return res.status(200).json({
      TODO,
    });
  } catch (error) {
    res.status(500).json({
      message: "Somthing went wrong",
    });
  }
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
  try {
    const id = (<{ id: string }>req.params).id;

    const deleteTodoIndex = TODO.findIndex((todo) => todo.id === id);

    if (deleteTodoIndex === -1) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    //Remove Todo
    TODO.splice(deleteTodoIndex, 1);

    return res.status(200).json({
      message: "Todo Delete Successfully",
      TODO,
    });
  } catch (error) {
    res.status(500).json({
      message: "Somthing went wrong",
    });
  }
};
