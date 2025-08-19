import React from "react";

function TransactionTable({ transactions }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold mb-2">Transaction Details</h2>
      <table className="w-full table-auto border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">User ID</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Device</th>
            <th className="border p-2">Fraud</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.user_id}>
              <td className="border p-2">{t.user_id}</td>
              <td className="border p-2">{t.purchase_value}</td>
              <td className="border p-2">{t.device_id}</td>
              <td className="border p-2">{t.fraud ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
