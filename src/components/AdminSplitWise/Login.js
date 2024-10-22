import React, { useState } from "react";

const Login = ({ onLogin, onToggleToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
      onLogin(storedUser.email, storedUser.name); // Pass email and name to onLogin callback
    } else {
      setError("Invalid email or password");
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
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
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
