import os
import sys
import joblib
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

def train_student_model():
    print("Model Training Started...\n")
    
    csv_file = "student_performance.csv"
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} not found. Please ensure the dataset file exists.")
        sys.exit(1)
        
    df = pd.read_csv(csv_file)
    print(f"Loaded dataset: {df.shape[0]} rows, {df.shape[1]} columns")
    
    # Check for missing values
    if df.isnull().sum().sum() > 0:
        print("Handling missing values...")
        df = df.dropna()

    # Defined feature order
    feature_columns = [
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
    target_column = "final_percentage"

    X = df[feature_columns]
    y = df[target_column]

    # Split dataset
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # 1. Linear Regression
    lr = LinearRegression()
    lr.fit(X_train, y_train)
    lr_preds = lr.predict(X_test)

    lr_mae = mean_absolute_error(y_test, lr_preds)
    lr_mse = mean_squared_error(y_test, lr_preds)
    lr_rmse = np.sqrt(lr_mse)
    lr_r2 = r2_score(y_test, lr_preds)

    print("Linear Regression")
    print(f"MAE: {lr_mae:.4f}")
    print(f"RMSE: {lr_rmse:.4f}")
    print(f"R2 Score: {lr_r2:.4f}\n")

    # 2. Random Forest Regressor
    rf = RandomForestRegressor(n_estimators=100, random_state=42)
    rf.fit(X_train, y_train)
    rf_preds = rf.predict(X_test)

    rf_mae = mean_absolute_error(y_test, rf_preds)
    rf_mse = mean_squared_error(y_test, rf_preds)
    rf_rmse = np.sqrt(rf_mse)
    rf_r2 = r2_score(y_test, rf_preds)

    print("Random Forest")
    print(f"MAE: {rf_mae:.4f}")
    print(f"RMSE: {rf_rmse:.4f}")
    print(f"R2 Score: {rf_r2:.4f}\n")

    # Select best model based on R2 Score
    if rf_r2 >= lr_r2:
        best_model = rf
        best_model_name = "Random Forest"
    else:
        best_model = lr
        best_model_name = "Linear Regression"

    print(f"Best Model: {best_model_name}\n")

    # Save best model
    joblib.dump(best_model, "model.pkl")
    print("Model saved successfully as model.pkl")

if __name__ == "__main__":
    train_student_model()
