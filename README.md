# SmartED

## Machine Learning-Based Hospital Waiting Time Prediction and Analytics System

SmartED is a full-stack Data Science project that predicts hospital patient waiting time using Machine Learning and provides hospital analytics through a web application.

The system combines a React frontend, FastAPI backend, Machine Learning model, and MySQL database.

## Project Objective

The main objective of SmartED is to estimate patient waiting time based on patient information and hospital operational factors.

The system can:

- Predict patient waiting time in minutes
- Classify waiting time as Low, Moderate, or High
- Display an estimated prediction range
- Explain the major factors influencing the prediction
- Store prediction records in MySQL
- Display prediction history
- Provide hospital-level analytics through a dashboard

## Features

### Patient Prediction

Users can enter:

- Age
- Gender
- Department
- Triage Level
- Arrival Hour
- Day of Week
- Patients Waiting
- Doctors Available
- Nurses Available
- Hospital Occupancy
- Emergency Cases
- Previous Average Waiting Time

The system returns:

- Predicted waiting time
- Waiting-time status
- Estimated range
- Top factors influencing the prediction

### Hospital Dashboard

The dashboard displays:

- Total patients
- Total predictions
- Average waiting time
- High waiting-time predictions
- Moderate waiting-time predictions
- Low waiting-time predictions
- Waiting-time status distribution

### Prediction History

All predictions are stored in MySQL and displayed in a history table.

### Model Explainability

The application displays feature contributions from the Linear Regression model to help explain why a prediction is high or low.

## Machine Learning

Three regression models were evaluated:

1. Linear Regression
2. Random Forest
3. XGBoost

### Model Evaluation

| Model | MAE | RMSE | R² |
|---|---:|---:|---:|
| Linear Regression | 4.85 | 6.14 | 0.945 |
| Random Forest | 6.70 | 8.37 | 0.897 |
| XGBoost | 5.47 | 6.85 | 0.931 |

### Selected Model

Linear Regression was selected because it achieved:

- Lowest MAE: 4.85 minutes
- Lowest RMSE: 6.14 minutes
- Highest R²: 0.945

The model was trained using an 80/20 train-test split.

## Dataset

The project uses a synthetic dataset created specifically for educational and demonstration purposes.

The dataset contains 8,000 records and 14 columns.

### Input Features

- age
- gender
- department
- triage_level
- arrival_hour
- day_of_week
- is_weekend
- patients_waiting
- doctors_available
- nurses_available
- hospital_occupancy
- emergency_cases
- previous_avg_wait

### Target Variable

- waiting_time

## System Architecture

```text
React Frontend
       |
       v
FastAPI Backend
       |
       +------------------+
       |                  |
       v                  v
Machine Learning       MySQL Database
Model
```

The React frontend communicates with the FastAPI backend through REST API endpoints.

The backend loads the trained Machine Learning model and stores prediction records in MySQL.

## Technology Stack

### Data Science

- Python
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- Matplotlib
- Seaborn
- Plotly
- Joblib

### Backend

- FastAPI
- Uvicorn
- SQLAlchemy
- PyMySQL
- Pydantic

### Frontend

- React
- Vite
- React Router
- Recharts
- CSS

### Database

- MySQL

### Development Tools

- Visual Studio Code
- Jupyter Notebook
- MySQL Workbench

## Project Structure

```text
SmartED/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── models/
│   │   ├── waiting_model.pkl
│   │   └── preprocessing.pkl
│   ├── services/
│   │   └── explanation.py
│   ├── database/
│   │   ├── database.py
│   │   └── models.py
│   └── schemas/
│       └── prediction.py
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Dashboard.jsx
│   │   ├── PredictionHistory.jsx
│   │   ├── About.jsx
│   │   └── main.jsx
│   └── package.json
│
├── data/
│   └── hospital_waiting.csv
│
├── notebooks/
│   ├── 01_data_analysis.ipynb
│   └── 02_model_training.ipynb
│
├── screenshots/
│
├── README.md
│
└── presentation/
```

## API Endpoints

### Prediction

```text
POST /predict
```

Predicts patient waiting time.

### Explainability

```text
POST /explain
```

Returns the major feature contributions influencing the prediction.

### Dashboard

```text
GET /dashboard
```

Returns hospital prediction statistics.

### Prediction History

```text
GET /prediction-history
```

Returns stored prediction records.

### Model Status

```text
GET /model-status
```

Checks whether the Machine Learning model is loaded successfully.

## Running the Project

### Start Backend

Open PowerShell:

```powershell
cd "C:\Users\divya\OneDrive\Documents\SmartED"
.\venv\Scripts\Activate.ps1
uvicorn backend.main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

### Start Frontend

Open another PowerShell window:

```powershell
cd "C:\Users\divya\OneDrive\Documents\SmartED\frontend"
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Application Pages

### Prediction

```text
http://localhost:5173/
```

### Dashboard

```text
http://localhost:5173/dashboard
```

### Prediction History

```text
http://localhost:5173/history
```

### About

```text
http://localhost:5173/about
```

## Important Note

The dataset used by SmartED is synthetic and intended for educational and demonstration purposes.

The predictions generated by the system should not be used for real-world medical decision-making.

## Project Status

SmartED includes:

- Data generation
- Exploratory Data Analysis
- Machine Learning model training
- Model evaluation
- FastAPI backend
- MySQL database integration
- React frontend
- Patient prediction
- Dashboard analytics
- Prediction history
- Model explainability
- About Project page