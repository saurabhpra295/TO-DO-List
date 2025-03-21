import React from "react";
import TodoItem from "./TodoItem";

// Define the structure of a Todo item
interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; // Define possible statuses
}

// Define the props for the TableView component
interface TableViewProps {
  todos: Todo[]; // Array of Todo items
  onEdit: (todo: Todo) => void; // Function to handle editing a todo
  onDelete: (id: string) => void; // Function to handle deleting a todo
}

const TableView: React.FC<TableViewProps> = ({ todos, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border p-2">Task</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td className="border p-2">{todo.text}</td>
            <td className="border p-2">{todo.status}</td>
            <td className="border p-2">
              <button onClick={() => onEdit(todo)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
              <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
