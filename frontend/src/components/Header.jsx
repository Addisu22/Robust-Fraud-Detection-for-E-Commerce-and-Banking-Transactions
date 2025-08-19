import React from "react";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Fraud Detection Dashboard</h1>
      <div>User: Admin</div>
    </header>
  );
}

export default Header;
