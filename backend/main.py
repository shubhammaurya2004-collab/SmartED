# from fastapi import FastAPI

# app = FastAPI(
#     title="SmartED API",
#     description="Hospital Waiting Time Prediction API",
#     version="1.0.0"
# )


# @app.get("/")
# def home():
#     return {
#         "message": "SmartED API is running successfully!"
#     }

# from fastapi import FastAPI
# import joblib

# app = FastAPI(
#     title="SmartED API",
#     description="Hospital Waiting Time Prediction API",
#     version="1.0.0"
# )

# # Load the trained ML model
# model = joblib.load("backend/models/waiting_model.pkl")

# # Load the preprocessing system
# preprocessor = joblib.load("backend/models/preprocessing.pkl")


# @app.get("/")
# def home():
#     return {
#         "message": "SmartED API is running successfully!"
#     }


# @app.get("/model-status")
# def model_status():
#     return {
#         "model": "Linear Regression",
#         "status": "loaded successfully"
#     }


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib

from backend.database.database import Base, engine
from backend.database import models
from backend.database.database import SessionLocal
from backend.services.explanation import explain_prediction

app = FastAPI(
    title="SmartED API",
    description="Hospital Waiting Time Prediction API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


# Load the trained ML model
model = joblib.load("backend/models/waiting_model.pkl")

# Load the preprocessing system
preprocessor = joblib.load("backend/models/preprocessing.pkl")


# Input data structure
class PredictionInput(BaseModel):
    age: int
    gender: str
    department: str
    triage_level: int
    arrival_hour: int
    day_of_week: str
    is_weekend: int
    patients_waiting: int
    doctors_available: int
    nurses_available: int
    hospital_occupancy: int
    emergency_cases: int
    previous_avg_wait: int


@app.get("/")
def home():
    return {
        "message": "SmartED API is running successfully!"
    }


@app.get("/model-status")
def model_status():
    return {
        "model": "Linear Regression",
        "status": "loaded successfully"
    }


@app.post("/predict")
def predict_waiting_time(data: PredictionInput):
    input_data = pd.DataFrame([data.model_dump()])
    processed_data = preprocessor.transform(input_data)

    prediction = model.predict(processed_data)[0]
    prediction = round(float(prediction), 2)

    if prediction < 30:
        status = "Low"
    elif prediction <= 60:
        status = "Moderate"
    else:
        status = "High"

    lower_bound = max(0, round(prediction - 4.85, 2))
    upper_bound = round(prediction + 4.85, 2)

    # Connect to database
    db = SessionLocal()

    try:
        # Save patient information
        patient = models.Patient(
            age=data.age,
            gender=data.gender,
            department=data.department,
            triage_level=data.triage_level,
            arrival_hour=data.arrival_hour,
            day_of_week=data.day_of_week,
            is_weekend=data.is_weekend
        )

        db.add(patient)
        db.commit()
        db.refresh(patient)

        # Save prediction
        prediction_record = models.Prediction(
            patient_id=patient.id,
            predicted_wait_time=prediction,
            status=status,
            lower_bound=lower_bound,
            upper_bound=upper_bound
        )

        db.add(prediction_record)
        db.commit()

        return {
            "predicted_wait_time": prediction,
            "status": status,
            "lower_bound": lower_bound,
            "upper_bound": upper_bound
        }

    finally:
        db.close()


from sqlalchemy import func
@app.get("/dashboard")
def dashboard():
    db = SessionLocal()

    try:
        total_patients = db.query(models.Patient).count()

        total_predictions = db.query(models.Prediction).count()

        average_wait = db.query(
            func.avg(models.Prediction.predicted_wait_time)
        ).scalar()

        high_count = db.query(models.Prediction).filter(
            models.Prediction.status == "High"
        ).count()

        moderate_count = db.query(models.Prediction).filter(
            models.Prediction.status == "Moderate"
        ).count()

        low_count = db.query(models.Prediction).filter(
            models.Prediction.status == "Low"
        ).count()

        return {
            "total_patients": total_patients,
            "total_predictions": total_predictions,
            "average_wait": round(float(average_wait), 2) if average_wait else 0,
            "high_count": high_count,
            "moderate_count": moderate_count,
            "low_count": low_count
        }

    finally:
        db.close()

@app.get("/prediction-history")
def prediction_history():
    db = SessionLocal()

    try:
        records = (
            db.query(models.Prediction)
            .order_by(models.Prediction.id.desc())
            .all()
        )

        history = []

        for record in records:
            history.append({
                "id": record.id,
                "patient_id": record.patient_id,
                "predicted_wait_time": record.predicted_wait_time,
                "status": record.status,
                "lower_bound": record.lower_bound,
                "upper_bound": record.upper_bound,
                "created_at": record.created_at
            })

        return history

    finally:
        db.close()

@app.post("/explain")
def explain(data: PredictionInput):
    input_data = pd.DataFrame([data.model_dump()])

    explanation = explain_prediction(
        model,
        preprocessor,
        input_data
    )

    return {
        "explanation": explanation[:10]
    }