import React, { useState } from "react";
import { forgotPassword } from "../services/api";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await forgotPassword(email);
    setMessage(res);
  };

  return (
    <div className="auth-container flex items-center justify-center min-h-screen bg-gray-100">
      <form className="auth-form bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <input
          className="auth-input mb-4 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button className="auth-button w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors" type="submit">Send Reset Link</button>
        <div className="auth-message mt-4 text-center text-green-600">{message}</div>
      </form>
    </div>
  );
};

export default ForgotPassword;