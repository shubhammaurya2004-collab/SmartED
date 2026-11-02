import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function PredictionHistory() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/prediction-history")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch prediction history");
        }

        return response.json();
      })
      .then((data) => {
        setHistory(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">SmartED</div>

        <div className="nav-links">
          <Link to="/">Prediction</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/history">History</Link>
           <Link to="/about">About</Link>
        </div>
      </nav>

      <div className="history-container">
        <h1>Prediction History</h1>

        {history.length === 0 ? (
          <p>No prediction records found.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient ID</th>
                  <th>Predicted Wait</th>
                  <th>Status</th>
                  <th>Lower Bound</th>
                  <th>Upper Bound</th>
                  <th>Date & Time</th>
                </tr>
              </thead>

              <tbody>
                {history.map((record) => (
                  <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.patient_id}</td>
                    <td>{record.predicted_wait_time} min</td>
                    <td>{record.status}</td>
                    <td>{record.lower_bound} min</td>
                    <td>{record.upper_bound} min</td>
                    <td>
                      {new Date(record.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default PredictionHistory;