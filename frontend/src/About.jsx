import { Link } from "react-router-dom";
import "./App.css";

function About() {
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

      <div className="about-container">
        <h1>About SmartED</h1>

        <p className="about-intro">
          SmartED is a Machine Learning-Based Hospital Waiting Time
          Prediction and Analytics System designed to estimate patient
          waiting time and provide useful hospital analytics.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h2>Project Objective</h2>
            <p>
              The main objective is to predict hospital waiting time using
              patient information and hospital operational factors.
            </p>
          </div>

          <div className="about-card">
            <h2>Machine Learning</h2>
            <p>
              Multiple regression models were evaluated using MAE, RMSE,
              and R². Linear Regression was selected as the best-performing
              model for this dataset.
            </p>
          </div>

          <div className="about-card">
            <h2>Technology Stack</h2>
            <p>
              Python, Pandas, Scikit-learn, FastAPI, React, Recharts,
              SQLAlchemy, MySQL, and Vite.
            </p>
          </div>

          <div className="about-card">
            <h2>Analytics</h2>
            <p>
              The system provides prediction history, waiting-time status
              analysis, dashboard statistics, and model feature
              contributions.
            </p>
          </div>
        </div>

        <div className="about-card methodology">
          <h2>System Architecture</h2>

          <p>
            React Frontend → FastAPI Backend → Machine Learning Model →
            MySQL Database
          </p>
        </div>

        <div className="about-card methodology">
          <h2>Dataset</h2>

          <p>
            The project uses a synthetic hospital waiting-time dataset
            created for educational and demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;