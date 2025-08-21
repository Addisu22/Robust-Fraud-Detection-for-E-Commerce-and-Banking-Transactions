import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import CreditCard from "./pages/CreditCard";
import Ecommerce from "./pages/Ecommerce";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Header */}
        <Header />

        <div style={{ display: "flex", flex: 1 }}>
          {/* Sidebar Menu */}
          <MenuBar />

          {/* Main content area */}
          <main style={{ flex: 1, padding: "1rem" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/creditcard" element={<CreditCard />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
