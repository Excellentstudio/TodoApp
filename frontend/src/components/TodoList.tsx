import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo, markTodoComplete } from "../services/api";
import { TodoItem, TodoItemDto } from "../types/api";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [form, setForm] = useState<TodoItemDto>({ title: "", description: "" });
  const [editId, setEditId] = useState<number | null>(null);

  const fetchTodos = async () => {
    setTodos(await getTodos());
  };
  useEffect(() => { fetchTodos(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTodo(form);
    setForm({ title: "", description: "" });
    fetchTodos();
  };

  const handleEdit = (todo: TodoItem) => {
    setEditId(todo.id);
    setForm({ title: todo.title, description: todo.description });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await updateTodo(editId, form);
      setEditId(null);
      setForm({ title: "", description: "" });
      fetchTodos();
    }
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleComplete = async (id: number) => {
    await markTodoComplete(id);
    fetchTodos();
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={editId ? handleUpdate : handleAdd}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <button type="submit">{editId ? "Update" : "Add"}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ title: "", description: "" }); }}>Cancel</button>}
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.title}: {todo.description}</span>
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            {!todo.isCompleted && <button onClick={() => handleComplete(todo.id)}>Mark Complete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;