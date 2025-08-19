from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load model
rf_model = joblib.load("models/rf_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json  # receive transaction dict
    df = pd.DataFrame([data])
    pred = rf_model.predict(df)
    return jsonify({"fraud": int(pred[0])})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
