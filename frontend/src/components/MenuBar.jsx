import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#f3f4f6",
        padding: "1rem",
        height: "100vh",
        boxSizing: "border-box",
        borderRight: "1px solid #ddd",
      }}
    >
      <nav>
        <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Menu</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* Dashboard */}
          <li style={{ marginBottom: "0.5rem" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#1e40af" }}>
              Dashboard
            </Link>
          </li>

          {/* Credit Card Fraud with dropdown */}
          <li style={{ marginBottom: "0.5rem" }}>
            <div
              onClick={() => toggleMenu("creditcard")}
              style={{ cursor: "pointer", color: "#1e40af" }}
            >
              Credit Card Fraud {openMenu === "creditcard" ? "▲" : "▼"}
            </div>
            {openMenu === "creditcard" && (
              <ul style={{ listStyle: "none", paddingLeft: "1rem" }}>
                <li>
                  <Link to="/creditcard/analysis" style={{ textDecoration: "none", color: "#374151" }}>
                    Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/creditcard/reports" style={{ textDecoration: "none", color: "#374151" }}>
                    Reports
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* E-commerce Fraud with dropdown */}
          <li style={{ marginBottom: "0.5rem" }}>
            <div
              onClick={() => toggleMenu("ecommerce")}
              style={{ cursor: "pointer", color: "#1e40af" }}
            >
              E-commerce Fraud {openMenu === "ecommerce" ? "▲" : "▼"}
            </div>
            {openMenu === "ecommerce" && (
              <ul style={{ listStyle: "none", paddingLeft: "1rem" }}>
                <li>
                  <Link to="/ecommerce/orders" style={{ textDecoration: "none", color: "#374151" }}>
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to="/ecommerce/reports" style={{ textDecoration: "none", color: "#374151" }}>
                    Reports
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
