import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{ textAlign: "center", padding: "1em", backgroundColor: "#f1f1f1" }}>
      <p>Copyright &copy; {year} - Blog Hub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
