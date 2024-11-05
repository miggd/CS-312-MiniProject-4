import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Footer from "./components/footer";
import Home from "./components/home";
import "./styles.css";

// Main component
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserRegister" element={<UserRegister />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
