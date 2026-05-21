import { useState } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

type TodoListProps = {
  items: { id: string; text: string }[];
  removeTodo: (id: string) => void;
};

export default function TodoList(props: TodoListProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleReadMore = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {props.items.map((todo) => {
        const isExpanded = expanded.includes(todo.id);

        return (
          <Card
            key={todo.id}
            className="w-full rounded-2xl border shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="relative p-5">
              {/* Delete Button */}
              <Button
                variant="destructive"
                size="icon"
                onClick={() => props.removeTodo(todo.id)}
                className="absolute top-3 right-3 h-9 w-9 shrink-0"
              >
                <Trash2 className="h-5 w-5" />
              </Button>

              {/* Todo Text */}
              <CardTitle
                className={`pr-12 text-sm sm:text-base font-medium leading-relaxed break-words whitespace-pre-wrap ${
                  !isExpanded ? "line-clamp-4" : ""
                }`}
              >
                {todo.text}
              </CardTitle>

              {/* Read More / Less */}
              {todo.text.length > 120 && (
                <button
                  onClick={() => toggleReadMore(todo.id)}
                  className="mt-2 text-sm font-medium text-blue-500 hover:underline self-start"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
