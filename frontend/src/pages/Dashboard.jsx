import React from "react";

export default function Dashboard() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <section className="panel" style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2 style={{ marginTop: 0 }}>Welcome to Real-Time Fraud Detection</h2>
        <p>
          This dashboard provides an overview of your fraud detection system.
          Use the menu to navigate to Credit Card or E-commerce prediction pages.
        </p>
      </section>

      <section className="panel" style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3 style={{ marginTop: 0 }}>Quick Tips</h3>
        <ul>
          <li>Backend must run at <code>http://localhost:8000</code> with <code>/api</code> endpoints.</li>
          <li>Select a <strong>start</strong> and <strong>end</strong> date to filter transactions.</li>
          <li>Results include total transactions, fraud count, non-fraud count, and fraud percentage.</li>
          <li>You can extend this dashboard with visualizations using Chart.js or Plotly.</li>
        </ul>
      </section>

      <section className="panel" style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3 style={{ marginTop: 0 }}>Navigation</h3>
        <ul>
          <li>Credit Card Fraud Detection Page</li>
          <li>E-commerce Fraud Detection Page</li>
        </ul>
      </section>
    </div>
  );
}
