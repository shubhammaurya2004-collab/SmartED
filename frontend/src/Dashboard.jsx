import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import "./App.css";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dashboard")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!data) {
    return <h2>Loading dashboard...</h2>;
  }

  const chartData = [
    { name: "High", value: data.high_count },
    { name: "Moderate", value: data.moderate_count },
    { name: "Low", value: data.low_count },
  ];

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

      <div className="dashboard">
        <h1>SmartED Hospital Dashboard</h1>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Total Patients</h2>
            <p>{data.total_patients}</p>
          </div>

          <div className="dashboard-card">
            <h2>Total Predictions</h2>
            <p>{data.total_predictions}</p>
          </div>

          <div className="dashboard-card">
            <h2>Average Waiting Time</h2>
            <p>{data.average_wait} minutes</p>
          </div>

          <div className="dashboard-card">
            <h2>High Waiting Time</h2>
            <p>{data.high_count}</p>
          </div>

          <div className="dashboard-card">
            <h2>Moderate Waiting Time</h2>
            <p>{data.moderate_count}</p>
          </div>

          <div className="dashboard-card">
            <h2>Low Waiting Time</h2>
            <p>{data.low_count}</p>
          </div>
        </div>

        <div className="chart-card">
          <h2>Waiting Time Status Distribution</h2>

          <p>
            Overview of predictions classified as High, Moderate, or Low
            waiting time.
          </p>

          <PieChart width={400} height={300}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;