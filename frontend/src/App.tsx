import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setPage("todos");
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>Register</button>
        <button onClick={() => setPage("forgot")}>Forgot Password</button>
        {loggedIn && <button onClick={() => setPage("todos")}>Todos</button>}
      </nav>
      <main>
        {page === "login" && <Login />}
        {page === "register" && <Register />}
        {page === "forgot" && <ForgotPassword />}
        {page === "todos" && loggedIn && <TodoList />}
      </main>
    </div>
  );
}

export default App;
