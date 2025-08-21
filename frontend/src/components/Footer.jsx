import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#1e40af",
        color: "#ffffff",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} Robust Fraud Detection E-commerce & Bank Transaction. All rights reserved.
      </p>
    </footer>
  );
}
