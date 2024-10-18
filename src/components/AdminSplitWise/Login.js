import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy users for testing (you can later replace this with an API call)
    const users = {
      subha: { username: "subha", password: "subha" },
      bala: { username: "bala", password: "bala" },
    };

    if (users[username] && users[username].password === password) {
      onLogin(username); // Notify App of successful login
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="px-3 py-1 text-primary font-size-large titlesplitequally ">
        <span className="text-light">Split Equally</span>
      </div>
      <div className="container">
        <h5>Login</h5>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} className="grid">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
