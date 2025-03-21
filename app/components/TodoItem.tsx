import React from "react";

// Define the structure of a Todo item
interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; // Define possible statuses
}

// Define the props for the TodoItem component
interface TodoItemProps {
  todo: Todo; // The todo item to display
  onEdit: (todo: Todo) => void; // Function to handle editing a todo
  onDelete: (id: string) => void; // Function to handle deleting a todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center border p-2">
      <span>{todo.text} - <strong>{todo.status}</strong></span>
      <div className="flex gap-2">
        <button onClick={() => onEdit(todo)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
        <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

