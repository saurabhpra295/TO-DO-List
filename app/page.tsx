"use client"
import { useState } from "react";
import TodoForm from "@/app/components/TodoForm";
import TableView from "@/app/components/TableView";
import KanbanBoard from "@/app/components/KanbanBoard";

// Define the structure of a Todo item
interface Todo {
  id: string;
  text: string;
  status: "todo" | "in-progress" | "completed"; // Define possible statuses
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Array of Todo items
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null); // Current editing Todo or null
  const [viewMode, setViewMode] = useState<"table" | "kanban">("table"); // View mode can be 'table' or 'kanban'

  const addOrUpdateTodo = (todo: Todo) => {
    if (editingTodo) {
      // Update existing todo
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setEditingTodo(null);
    } else {
      // Add new todo
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <main className="p-4">
      {/* View Mode Toggle */}
      <div className="mb-4">
        <button 
          onClick={() => setViewMode("table")} 
          className={`p-2 ${viewMode === "table" ? "bg-purple-500 text-white" : ""}`}>
          Table View
        </button>
        <button 
          onClick={() => setViewMode("kanban")} 
          className={`p-2 ${viewMode === "kanban" ? "bg-violet-500 text-white" : ""}`}>
          Kanban View
        </button>
      </div>

      {/* Form for Adding/Editing Todos */}
      <TodoForm initialData={editingTodo} onSubmit={addOrUpdateTodo} />

      {/* Display Todos Based on Selected View */}
      {viewMode === "table" ? (
        <TableView todos={todos} onEdit={setEditingTodo} onDelete={deleteTodo} />
      ) : (
        <KanbanBoard todos={todos} onEdit={setEditingTodo} onDelete={deleteTodo} />
      )}
    </main>
  );
};

export default Home;
