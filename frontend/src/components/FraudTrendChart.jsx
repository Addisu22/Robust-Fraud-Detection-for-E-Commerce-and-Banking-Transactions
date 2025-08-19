import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const sampleData = [
  { date: "2025-08-01", fraud_count: 20 },
  { date: "2025-08-02", fraud_count: 15 },
  { date: "2025-08-03", fraud_count: 25 },
  { date: "2025-08-04", fraud_count: 10 },
];

function FraudTrendChart() {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold mb-2">Fraud Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="fraud_count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FraudTrendChart;
