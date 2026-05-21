import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

type TodoListProps = {
  items: { id: string; text: string }[];
  removeTodo: (id: string) => void;
};

export default function TodoList(props: TodoListProps) {
  return (
    <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map((todo) => (
        <Card
          key={todo.id}
          className="w-full shadow-md rounded-xl border hover:shadow-lg transition"
        >
          <CardHeader className="flex flex-row justify-between items-start gap-3">
            {/* Long text wrap */}
            <CardTitle className="text-sm sm:text-base font-medium break-words flex-1">
              {todo.text}
            </CardTitle>

            <Button
              variant="destructive"
              size="icon"
              onClick={() => props.removeTodo(todo.id)}
              className="shrink-0"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
