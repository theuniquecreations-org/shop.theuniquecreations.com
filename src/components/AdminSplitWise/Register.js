import React, { useState } from "react";

const Register = ({ onRegister, onToggleToLogin }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if the user already exists
    if (localStorage.getItem(email)) {
      setError("User already exists with this email");
      return;
    }

    // Store the user's data in localStorage
    const newUser = { email, name, password };
    localStorage.setItem(email, JSON.stringify(newUser));

    // Call onRegister to log in after successful registration
    onRegister(email, name);
  };

  return (
    <>
      {" "}
      <div className="px-3 py-1 text-primary1 font-size-large titlesplitequally ">
        <span>
          <h5 className="text-light mb-0">Split Equally</h5>
        </span>
      </div>
      <div className="container">
        <h6 className="mb-0">Register</h6>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleRegister} className="grid">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
          <p>
            Have an account?{" "}
            <button type="button" className="btn btn-outline-warning" onClick={onToggleToLogin}>
              Log in here
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
