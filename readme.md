General System Architecture
            ┌─────────────────────┐
            │   React + Vite UI   │
            │ (Fraud Dashboard)   │
            └─────────┬───────────┘
                      │  REST/WebSocket
            ┌─────────▼───────────┐
            │     FastAPI API     │
            │ (Fraud Detection)   │
            └───────  ┬───────────┘
          Async ML    │
   ┌─────────── ─     ▼──────────┐
   │ Fraud ML Model (XGBoost / DL)│
   │ SHAP Explainability          │
   └─────────────┬───────────────┘
                 │
           ┌─────▼──────────    ──┐
           │   Message Broker     │
           │ (Kafka / Redis)      │
           └─────────┬────────────┘
                                 │
           ┌─────────▼────────────┐
           │   PostgreSQL / NoSQL │
           │ Transaction Storage  │
           └──────────────────────┘
