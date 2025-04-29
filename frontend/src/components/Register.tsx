import React, { useState } from "react";
import { registerUser } from "../services/api";
import { UserRegisterDto } from "../types/api";

const Register: React.FC = () => {
  const [form, setForm] = useState<UserRegisterDto>({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      if (res.id) setMessage("Registration successful!");
      else setMessage(res);
    } catch (error) {
      console.error(error)
    }

  };

  return (
    <div className="auth-container flex items-center justify-center min-h-screen bg-gray-100">
      <form className="auth-form bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          className="auth-input mb-4 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          className="auth-input mb-4 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="auth-input mb-4 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button className="auth-button w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors" type="submit">Register</button>
        <div className="auth-message mt-4 text-center text-green-600">{message}</div>
      </form>
    </div>
  );
};

export default Register;