import { UserRegisterDto, UserLoginDto, TodoItemDto } from "../types/api";

const API_URL = "https://crispy-zebra-rwx4x9rwgxxcjjw-5244.app.github.dev/api";

export async function registerUser(data: UserRegisterDto) {
  const res = await fetch(`${API_URL}/Auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginUser(data: UserLoginDto) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function forgotPassword(email: string) {
  const res = await fetch(`${API_URL}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email),
  });
  return res.json();
}

export async function getTodos() {
  const res = await fetch(`${API_URL}/todo`);
  return res.json();
}

export async function addTodo(data: TodoItemDto) {
  const res = await fetch(`${API_URL}/todo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateTodo(id: number, data: TodoItemDto) {
  const res = await fetch(`${API_URL}/todo/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteTodo(id: number) {
  const res = await fetch(`${API_URL}/todo/${id}`, {
    method: "DELETE" });
  return res.json();
}

export async function markTodoComplete(id: number) {
  const res = await fetch(`${API_URL}/todo/${id}/complete`, {
    method: "PATCH"
  });
  return res.json();
}