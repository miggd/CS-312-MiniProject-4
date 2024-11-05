import React from "react";

function Home() {
  return (
    <div className="homeContainer" style={{ textAlign: "center", padding: "2em" }}>
      <h2>Welcome to the Blog Hub</h2>
      <p>Your place to share and discover content!</p>
      <hr style={{ width: "50%", margin: "1em auto" }} />
      <div className="authBtnContainer" style={{ marginTop: "1.5em" }}>
        <a className="authBtn" href="/UserRegister" style={buttonStyle}>
          Register
        </a>
        <a className="authBtn" href="/UserLogin" style={buttonStyle}>
          Login
        </a>
      </div>
    </div>
  );
}

export default Home;
