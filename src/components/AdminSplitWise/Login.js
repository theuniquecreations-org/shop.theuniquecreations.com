import React, { useState } from "react";
import { saveUser, fetchUsers } from "./APIService";

const Login = ({ onLogin, onToggleToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const storedUser = await fetchUsers(email);
    console.log("storedUser", storedUser);
    if (storedUser && storedUser.password === password) {
      setLoading(false);
      console.log("log in user");
      onLogin(storedUser.email, storedUser.name); // Pass email and name to onLogin callback
    } else {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-3 py-1 text-primary1 font-size-large titlesplitequally ">
        <span>
          <h5 className="text-light mb-0">Split Equally</h5>
        </span>
      </div>
      <div className="container">
        <h5 className="mb-0">Login</h5>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} className="grid">
          <input type="email" placeholder="Email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} required />
          <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">{loading ? "Please Wait..." : "Login"}</button>
          <p>
            Don't have an account?{" "}
            <button type="button" className="btn btn-outline-warning" onClick={onToggleToRegister}>
              Register here
            </button>
          </p>{" "}
        </form>
      </div>
    </>
  );
};

export default Login;
