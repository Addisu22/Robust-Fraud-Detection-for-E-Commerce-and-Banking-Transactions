from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ------------------------
# Load fraud dataset
# ------------------------
df = pd.read_csv("../Data/fraud_data.csv")

# Optional: sample 3500 records for faster loading
df_sample = df.sample(n=3500, random_state=42)

# ------------------------
# Health check endpoint
# ------------------------
@app.route("/health")
def health():
    return "Server is running"

# ------------------------
# API: get transactions
# ------------------------
@app.route("/transactions", methods=["GET"])
def get_transactions():
    # Select columns to send to frontend
    cols_to_show = ["user_id", "signup_time", "purchase_time", "purchase_value",
                    "device_id", "source", "browser", "sex", "age", "ip_address", "Class"]
    data = df_sample[cols_to_show].to_dict(orient="records")
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
