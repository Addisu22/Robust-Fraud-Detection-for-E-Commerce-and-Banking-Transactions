import React from "react";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "#1e40af", // deep blue
        color: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Robust Fraud Detection for E-commerce & Bank Transaction. </h1>
      <nav>
        <>&nbsp;&nbsp;</>
        <a href="/" style={{ color: "#ffffff", marginRight: "1rem", textDecoration: "none" }}>Dashboard</a>
        <a href="/creditcard" style={{ color: "#ffffff", marginRight: "1rem", textDecoration: "none" }}>Credit Card</a>
        <a href="/ecommerce" style={{ color: "#ffffff", textDecoration: "none" }}>E-commerce</a>
      </nav>
    </header>
  );
}
