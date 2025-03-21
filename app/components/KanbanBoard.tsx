import React from "react";
import TodoItem from "./TodoItem";

// Define the structure of a Todo item
interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; // Define possible statuses
}

// Define the props for the KanbanBoard component
interface KanbanBoardProps {
  todos: Todo[]; // Array of Todo items
  onEdit: (todo: Todo) => void; // Function to handle editing a todo
  onDelete: (id: string) => void; // Function to handle deleting a todo
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ todos, onEdit, onDelete }) => {
  const statuses = ["todo", "in-progress", "completed"];

  return (
    <div className="flex gap-4">
      {statuses.map((status) => (
        <div key={status} className="w-1/3 border p-4">
          <h3>{status.replace("-", " ").toUpperCase()}</h3>
          {todos.filter((todo) => todo.status === status).map((todo) => (
            <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
