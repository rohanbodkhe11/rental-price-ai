import os
import sys
import numpy as np
import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor, ExtraTreesRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

def train_rental_model():
    print("=" * 50)
    print("RENTAL HOUSE PRICE MODEL TRAINING")
    print("=" * 50)

    csv_file = "rental_house_data.csv"
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} not found.")
        sys.exit(1)

    df = pd.read_csv(csv_file)
    print(f"Dataset loaded successfully.\nRecords: {len(df)}\n")

    # Clean & validate
    df = df.dropna()
    df = df.drop_duplicates()

    # Features and target
    categorical_features = ['location', 'locality_type', 'property_type', 'furnishing']
    numerical_features = [
        'bedrooms',
        'bathrooms',
        'area_sqft',
        'property_age',
        'floor_number',
        'total_floors',
        'parking',
        'amenity_count'
    ]

    all_features = categorical_features + numerical_features
    target = 'rent'

    X = df[all_features]
    y = df[target]

    # Preprocessing pipeline
    preprocessor = ColumnTransformer(
        transformers=[
            ('cat', OneHotEncoder(handle_unknown='ignore', sparse_output=False), categorical_features),
            ('num', 'passthrough', numerical_features)
        ]
    )

    # Train / test split (80/20)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42
    )

    models = {
        "Linear Regression": LinearRegression(),
        "Random Forest": RandomForestRegressor(n_estimators=160, max_depth=18, random_state=42),
        "Extra Trees": ExtraTreesRegressor(n_estimators=160, max_depth=18, random_state=42)
    }

    print("Training models...\n")

    best_score = -float("inf")
    best_model_name = None
    best_pipeline = None

    for name, regressor in models.items():
        pipeline = Pipeline(steps=[
            ('preprocessor', preprocessor),
            ('regressor', regressor)
        ])

        pipeline.fit(X_train, y_train)
        y_pred = pipeline.predict(X_test)

        mae = mean_absolute_error(y_test, y_pred)
        rmse = np.sqrt(mean_squared_error(y_test, y_pred))
        r2 = r2_score(y_test, y_pred)

        print(name)
        print(f"MAE  : ₹{mae:,.2f}")
        print(f"RMSE : ₹{rmse:,.2f}")
        print(f"R²   : {r2:.4f}\n")

        if r2 > best_score:
            best_score = r2
            best_model_name = name
            best_pipeline = pipeline

    print("=" * 50)
    print("BEST MODEL")
    print("=" * 50)
    print(f"Model: {best_model_name} (R²: {best_score:.4f})\n")

    joblib.dump(best_pipeline, "model.pkl")
    print("Model saved successfully as model.pkl")

if __name__ == "__main__":
    train_rental_model()
