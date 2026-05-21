import { useState } from "react";
import { Button } from "./components/ui/button";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";
export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
    };
    setTodos((pre) => [...pre, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((pre) => pre.filter((todo: Todo) => todo.id !== id));
  };

  return (
    <main className="max-w-6xl mx-auto ">
      <Button className="bg-red-600">Lets Build Todo</Button>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} removeTodo={removeTodo} />
    </main>
  );
}
