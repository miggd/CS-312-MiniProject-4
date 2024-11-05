import React, { useState } from "react";

// User login form component
function UserLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  function handleForm(event) {
    event.preventDefault();

    // Fetch request to log in the user
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Login successful");
          // Redirect to the main page or dashboard after successful login
          window.location.href = "/BigPostForm";
        }
      });
  }

  return (
    <div className="authContainer" style={containerStyle}>
      <div className="authCard" style={cardStyle}>
        <h1>Login</h1>
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
          <div className="form-group" style={{ marginTop: "1em" }}>
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
          <button type="submit" className="loginBtn" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
