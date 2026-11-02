import pandas as pd
import numpy as np

# Make results reproducible
np.random.seed(42)

# Number of records
n = 8000

# Basic patient information
age = np.random.randint(18, 85, n)

gender = np.random.choice(
    ["Male", "Female"],
    size=n
)

department = np.random.choice(
    ["Emergency", "General", "Cardiology", "Pediatrics", "Orthopedics"],
    size=n,
    p=[0.35, 0.30, 0.12, 0.10, 0.13]
)

# Triage level
# 1 = most urgent, 4 = least urgent
triage_level = np.random.choice(
    [1, 2, 3, 4],
    size=n,
    p=[0.15, 0.35, 0.35, 0.15]
)

# Arrival information
arrival_hour = np.random.randint(0, 24, n)

day_of_week = np.random.choice(
    ["Monday", "Tuesday", "Wednesday", "Thursday",
     "Friday", "Saturday", "Sunday"],
    size=n
)

is_weekend = np.isin(day_of_week, ["Saturday", "Sunday"]).astype(int)

# Hospital workload
patients_waiting = np.random.randint(2, 61, n)

doctors_available = np.random.randint(1, 9, n)

nurses_available = np.random.randint(3, 16, n)

hospital_occupancy = np.random.randint(45, 96, n)

emergency_cases = np.random.randint(0, 16, n)

previous_avg_wait = np.random.randint(15, 91, n)

# ---------------------------------------------------------
# Generate waiting time using realistic relationships
# ---------------------------------------------------------

waiting_time = (
    10
    + patients_waiting * 1.15
    - doctors_available * 3.5
    - nurses_available * 0.8
    + hospital_occupancy * 0.35
    + emergency_cases * 1.8
    + previous_avg_wait * 0.35
    + triage_level * 5
    + is_weekend * 4
    + np.random.normal(0, 6, n)
)

# Add department effects
department_effect = {
    "Emergency": 12,
    "General": 5,
    "Cardiology": 10,
    "Pediatrics": 3,
    "Orthopedics": 7
}

waiting_time += pd.Series(department).map(department_effect).values

# Keep waiting time realistic
waiting_time = np.clip(waiting_time, 5, 180)

# Round waiting time to whole minutes
waiting_time = np.round(waiting_time).astype(int)

# ---------------------------------------------------------
# Create DataFrame
# ---------------------------------------------------------

df = pd.DataFrame({
    "age": age,
    "gender": gender,
    "department": department,
    "triage_level": triage_level,
    "arrival_hour": arrival_hour,
    "day_of_week": day_of_week,
    "is_weekend": is_weekend,
    "patients_waiting": patients_waiting,
    "doctors_available": doctors_available,
    "nurses_available": nurses_available,
    "hospital_occupancy": hospital_occupancy,
    "emergency_cases": emergency_cases,
    "previous_avg_wait": previous_avg_wait,
    "waiting_time": waiting_time
})

# Save dataset
output_path = "data/hospital_waiting.csv"

df.to_csv(output_path, index=False)

print("Dataset generated successfully!")
print(f"Number of records: {len(df)}")
print(f"Saved to: {output_path}")
print("\nFirst 5 records:")
print(df.head())

print("\nDataset shape:")
print(df.shape)