import React, { useState } from "react";

// User registration form component
function UserRegister() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Handle form submission
  function handleForm(event) {
    event.preventDefault();
    
    // Fetch request to register user
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId, password, name }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Registration successful");
        }
      });
  }

  // User registration form
  return (
    <div className="authContainer">
      <div className="authCard">
        <h1>Register</h1>
        <form onSubmit={handleForm}>
          <div className="form-group">
            <label htmlFor="user_id">Username</label>
            <input
              type="text"
              className="form-control"
              name="user_id"
              placeholder="Enter your username"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
