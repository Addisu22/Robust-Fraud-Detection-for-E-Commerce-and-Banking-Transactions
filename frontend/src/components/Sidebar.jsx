import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <ul>
        <li className="py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
        <li className="py-2 hover:bg-gray-700 cursor-pointer">Transactions</li>
        <li className="py-2 hover:bg-gray-700 cursor-pointer">Reports</li>
        <li className="py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
