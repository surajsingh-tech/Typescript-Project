import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type addTodoProps = {
  onAddTodo: (todo: string) => void;
};

export default function AddTodo({ onAddTodo }: addTodoProps) {
  const [text, setText] = useState("");

  const changeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <form className="flex items-center gap-5 my-2" onSubmit={onSubmitHandler}>
      <Input
        value={text}
        onChange={changeEventHandler}
        type="text"
        placeholder="Write a new todo..."
        className="w-fit text-white"
      />

      <Button type="submit">Add Todo</Button>
    </form>
  );
}
