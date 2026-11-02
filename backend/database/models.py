from sqlalchemy import Column, Integer, Float, String, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship

from backend.database.database import Base


class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)
    age = Column(Integer)
    gender = Column(String(20))
    department = Column(String(50))
    triage_level = Column(Integer)
    arrival_hour = Column(Integer)
    day_of_week = Column(String(20))
    is_weekend = Column(Integer)


class HospitalStatus(Base):
    __tablename__ = "hospital_status"

    id = Column(Integer, primary_key=True, index=True)
    patients_waiting = Column(Integer)
    doctors_available = Column(Integer)
    nurses_available = Column(Integer)
    hospital_occupancy = Column(Integer)
    emergency_cases = Column(Integer)
    previous_avg_wait = Column(Integer)


class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"))
    predicted_wait_time = Column(Float)
    status = Column(String(20))
    lower_bound = Column(Float)
    upper_bound = Column(Float)
    created_at = Column(
    DateTime,
    server_default=func.now()
)

    patient = relationship("Patient")

    