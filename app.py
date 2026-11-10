import os
import joblib
import pandas as pd
from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder='templates', static_folder='static')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model.pkl")

def get_performance_category(score):
    if score >= 85.0:
        return "Excellent"
    elif score >= 75.0:
        return "Very Good"
    elif score >= 60.0:
        return "Good"
    elif score >= 50.0:
        return "Average"
    else:
        return "Needs Improvement"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    # Verify model file exists
    if not os.path.exists(MODEL_PATH):
        return jsonify({
            "error": "Model file (model.pkl) not found. Please train the model first using python train_model.py."
        }), 500

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid request. JSON payload expected."}), 400

        required_fields = [
            "study_hours",
            "attendance",
            "previous_percentage",
            "assignment_score",
            "internal_score",
            "sleep_hours",
            "extracurricular",
            "internet_access",
            "backlogs"
        ]

        # Check for missing fields
        missing_fields = [field for field in required_fields if field not in data or data[field] is None or data[field] == ""]
        if missing_fields:
            return jsonify({
                "error": f"Missing required input fields: {', '.join(missing_fields)}"
            }), 400

        # Extract and convert numeric values
        try:
            study_hours = float(data["study_hours"])
            attendance = float(data["attendance"])
            previous_percentage = float(data["previous_percentage"])
            assignment_score = float(data["assignment_score"])
            internal_score = float(data["internal_score"])
            sleep_hours = float(data["sleep_hours"])
            extracurricular = int(data["extracurricular"])
            internet_access = int(data["internet_access"])
            backlogs = int(data["backlogs"])
        except (ValueError, TypeError):
            return jsonify({"error": "All input values must be valid numbers."}), 400

        # Validate range constraints
        if not (0 <= study_hours <= 24):
            return jsonify({"error": "Study hours must be between 0 and 24."}), 400

        if not (0 <= attendance <= 100):
            return jsonify({"error": "Attendance percentage must be between 0 and 100."}), 400

        if not (0 <= previous_percentage <= 100):
            return jsonify({"error": "Previous semester percentage must be between 0 and 100."}), 400

        if not (0 <= assignment_score <= 100):
            return jsonify({"error": "Assignment score must be between 0 and 100."}), 400

        if not (0 <= internal_score <= 100):
            return jsonify({"error": "Internal test score must be between 0 and 100."}), 400

        if not (0 <= sleep_hours <= 24):
            return jsonify({"error": "Sleep hours must be between 0 and 24."}), 400

        if extracurricular not in [0, 1]:
            return jsonify({"error": "Extracurricular activities must be 0 (No) or 1 (Yes)."}), 400

        if internet_access not in [0, 1]:
            return jsonify({"error": "Internet access must be 0 (No) or 1 (Yes)."}), 400

        if backlogs < 0:
            return jsonify({"error": "Number of backlogs cannot be negative."}), 400

        # Load model and prepare feature DataFrame with exact feature order
        model = joblib.load(MODEL_PATH)

        input_features = pd.DataFrame([{
            "study_hours": study_hours,
            "attendance": attendance,
            "previous_percentage": previous_percentage,
            "assignment_score": assignment_score,
            "internal_score": internal_score,
            "sleep_hours": sleep_hours,
            "extracurricular": extracurricular,
            "internet_access": internet_access,
            "backlogs": backlogs
        }])

        raw_prediction = model.predict(input_features)[0]
        # Clamp prediction between 0 and 100 for academic percentage
        clamped_prediction = max(0.0, min(100.0, float(raw_prediction)))
        prediction_final = round(clamped_prediction, 2)

        category = get_performance_category(prediction_final)

        return jsonify({
            "prediction": prediction_final,
            "category": category
        }), 200

    except Exception as e:
        return jsonify({"error": f"An unexpected server error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
