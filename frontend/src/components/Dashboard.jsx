import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../api/flaskApi";
import TransactionTable from "./TransactionTable";
import FraudTrendChart from "./FraudTrendChart";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch sample transaction data
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Total Transactions: 70000</div>
        <div className="bg-white p-4 shadow rounded">Fraudulent: 3500</div>
        <div className="bg-white p-4 shadow rounded">Fraud %: 5%</div>
      </div>
      <FraudTrendChart />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default Dashboard;
