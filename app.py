import os
import joblib
import pandas as pd
from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder='templates', static_folder='static')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model.pkl")

# Valid options
VALID_LOCATIONS = [
    'Chhatrapati Sambhajinagar',
    'Pune',
    'Mumbai',
    'Nashik',
    'Nagpur',
    'Thane',
    'Bengaluru',
    'Hyderabad',
    'Delhi',
    'Noida'
]

VALID_PROPERTY_TYPES = [
    'Apartment',
    'Independent House',
    'Villa',
    'Studio',
    '1 RK'
]

VALID_FURNISHING = [
    'Unfurnished',
    'Semi-Furnished',
    'Fully Furnished'
]

def format_inr(number):
    """Format number in Indian numbering system (e.g. ₹24,500, ₹1,20,000)"""
    num_str = str(int(round(number)))
    if len(num_str) <= 3:
        return f"₹{num_str}"
    
    last_three = num_str[-3:]
    remaining = num_str[:-3]
    
    # Split remaining in groups of 2 from right to left
    groups = []
    while len(remaining) > 2:
        groups.insert(0, remaining[-2:])
        remaining = remaining[:-2]
    if remaining:
        groups.insert(0, remaining)
        
    return f"₹{','.join(groups)},{last_three}"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    if not os.path.exists(MODEL_PATH):
        return jsonify({
            "success": False,
            "error": "Model file (model.pkl) not found. Please train the model first by running python train_model.py."
        }), 500

    try:
        data = request.get_json()
        if not data:
            return jsonify({
                "success": False,
                "error": "Invalid request payload. Expected JSON body."
            }), 400

        required_fields = [
            'location',
            'property_type',
            'bedrooms',
            'bathrooms',
            'area_sqft',
            'furnishing',
            'property_age',
            'floor_number',
            'total_floors',
            'parking',
            'amenity_count'
        ]

        # Check for missing fields
        missing = [f for f in required_fields if f not in data or data[f] is None or data[f] == '']
        if missing:
            return jsonify({
                "success": False,
                "error": f"Missing required fields: {', '.join(missing)}"
            }), 400

        location_raw = str(data['location']).strip()
        # Handle alias
        if location_raw.lower() == 'aurangabad':
            location = 'Chhatrapati Sambhajinagar'
        else:
            location = location_raw

        if location not in VALID_LOCATIONS:
            return jsonify({
                "success": False,
                "error": f"Invalid location '{location}'. Please choose a supported city."
            }), 400

        property_type = str(data['property_type']).strip()
        if property_type not in VALID_PROPERTY_TYPES:
            return jsonify({
                "success": False,
                "error": f"Invalid property type '{property_type}'."
            }), 400

        furnishing = str(data['furnishing']).strip()
        if furnishing not in VALID_FURNISHING:
            return jsonify({
                "success": False,
                "error": f"Invalid furnishing type '{furnishing}'."
            }), 400

        # Parse numeric features
        try:
            bedrooms = int(data['bedrooms'])
            bathrooms = int(data['bathrooms'])
            area_sqft = float(data['area_sqft'])
            property_age = int(data['property_age'])
            floor_number = int(data['floor_number'])
            total_floors = int(data['total_floors'])
            parking = int(data['parking'])
            amenity_count = int(data['amenity_count'])
        except (ValueError, TypeError):
            return jsonify({
                "success": False,
                "error": "Numeric inputs must be valid numbers."
            }), 400

        # Range validations
        if not (1 <= bedrooms <= 10):
            return jsonify({"success": False, "error": "Bedrooms must be between 1 and 10."}), 400

        if not (1 <= bathrooms <= 10):
            return jsonify({"success": False, "error": "Bathrooms must be between 1 and 10."}), 400

        if not (200 <= area_sqft <= 10000):
            return jsonify({"success": False, "error": "Area must be between 200 and 10,000 sq ft."}), 400

        if not (0 <= property_age <= 100):
            return jsonify({"success": False, "error": "Property age must be between 0 and 100 years."}), 400

        if not (0 <= floor_number <= 100):
            return jsonify({"success": False, "error": "Floor number must be between 0 and 100."}), 400

        if not (1 <= total_floors <= 100):
            return jsonify({"success": False, "error": "Total floors must be between 1 and 100."}), 400

        if floor_number > total_floors:
            return jsonify({
                "success": False,
                "error": "Floor number cannot be greater than total floors."
            }), 400

        if parking not in [0, 1]:
            return jsonify({"success": False, "error": "Parking must be 0 (No) or 1 (Yes)."}), 400

        if not (0 <= amenity_count <= 7):
            return jsonify({"success": False, "error": "Amenity count must be between 0 and 7."}), 400

        # Load trained pipeline
        model = joblib.load(MODEL_PATH)

        # Create input DataFrame matching feature columns
        input_df = pd.DataFrame([{
            'location': location,
            'property_type': property_type,
            'bedrooms': bedrooms,
            'bathrooms': bathrooms,
            'area_sqft': area_sqft,
            'furnishing': furnishing,
            'property_age': property_age,
            'floor_number': floor_number,
            'total_floors': total_floors,
            'parking': parking,
            'amenity_count': amenity_count
        }])

        raw_pred = model.predict(input_df)[0]
        pred_rent = max(3500, int(round(raw_pred)))

        # Calculate indicative estimate range (+- 12%)
        lower_bound = max(3000, int(round(pred_rent * 0.88)))
        upper_bound = int(round(pred_rent * 1.12))

        formatted_rent = format_inr(pred_rent)
        formatted_lower = format_inr(lower_bound)
        formatted_upper = format_inr(upper_bound)

        return jsonify({
            "success": True,
            "prediction": pred_rent,
            "formatted_prediction": formatted_rent,
            "monthly_rent": f"{formatted_rent} / month",
            "indicative_range": f"{formatted_lower} – {formatted_upper}",
            "range_lower": lower_bound,
            "range_upper": upper_bound
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"An error occurred while processing prediction: {str(e)}"
        }), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
