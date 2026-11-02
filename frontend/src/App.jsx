// // import "./App.css";

// // function App() {
// //   return (
// //     <div className="app">
// //       <header>
// //         <h1>SmartED</h1>
// //         <p>Hospital Waiting Time Prediction & Analytics System</p>
// //       </header>

// //       <main>
// //         <section className="card">
// //           <h2>Patient Waiting Time Prediction</h2>
// //           <p>Enter patient and hospital information to predict waiting time.</p>

// //           <div className="form-grid">
// //             <input type="number" placeholder="Age" />

// //             <select>
// //               <option value="">Select Gender</option>
// //               <option>Male</option>
// //               <option>Female</option>
// //             </select>

// //             <select>
// //               <option value="">Select Department</option>
// //               <option>Emergency</option>
// //               <option>Cardiology</option>
// //               <option>Orthopedics</option>
// //               <option>Neurology</option>
// //               <option>General Medicine</option>
// //             </select>

// //             <select>
// //               <option value="">Select Triage Level</option>
// //               <option value="1">Level 1</option>
// //               <option value="2">Level 2</option>
// //               <option value="3">Level 3</option>
// //               <option value="4">Level 4</option>
// //               <option value="5">Level 5</option>
// //             </select>

// //             <input type="number" placeholder="Arrival Hour (0-23)" />

// //             <select>
// //               <option value="">Select Day</option>
// //               <option>Monday</option>
// //               <option>Tuesday</option>
// //               <option>Wednesday</option>
// //               <option>Thursday</option>
// //               <option>Friday</option>
// //               <option>Saturday</option>
// //               <option>Sunday</option>
// //             </select>

// //             <input type="number" placeholder="Patients Waiting" />
// //             <input type="number" placeholder="Doctors Available" />
// //             <input type="number" placeholder="Nurses Available" />
// //             <input type="number" placeholder="Hospital Occupancy (%)" />
// //             <input type="number" placeholder="Emergency Cases" />
// //             <input type="number" placeholder="Previous Average Wait (min)" />
// //           </div>

// //           <button>Predict Waiting Time</button>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;



// // import { useState } from "react";
// // import "./App.css";

// // function App() {
// //   const [formData, setFormData] = useState({
// //     age: "",
// //     gender: "",
// //     department: "",
// //     triage_level: "",
// //     arrival_hour: "",
// //     day_of_week: "",
// //     patients_waiting: "",
// //     doctors_available: "",
// //     nurses_available: "",
// //     hospital_occupancy: "",
// //     emergency_cases: "",
// //     previous_avg_wait: "",
// //   });

// //   const [result, setResult] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (event) => {
// //     setFormData({
// //       ...formData,
// //       [event.target.name]: event.target.value,
// //     });
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);
// //     setResult(null);

// //     const day = formData.day_of_week;

// //     const dataToSend = {
// //       age: Number(formData.age),
// //       gender: formData.gender,
// //       department: formData.department,
// //       triage_level: Number(formData.triage_level),
// //       arrival_hour: Number(formData.arrival_hour),
// //       day_of_week: day,
// //       is_weekend: day === "Saturday" || day === "Sunday" ? 1 : 0,
// //       patients_waiting: Number(formData.patients_waiting),
// //       doctors_available: Number(formData.doctors_available),
// //       nurses_available: Number(formData.nurses_available),
// //       hospital_occupancy: Number(formData.hospital_occupancy),
// //       emergency_cases: Number(formData.emergency_cases),
// //       previous_avg_wait: Number(formData.previous_avg_wait),
// //     };

// //     try {
// //       const response = await fetch("http://127.0.0.1:8000/predict", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(dataToSend),
// //       });

// //       if (!response.ok) {
// //         throw new Error("Prediction request failed");
// //       }

// //       const data = await response.json();
// //       setResult(data);
// //     } catch (error) {
// //       setResult({
// //         error: "Unable to connect to the prediction server.",
// //       });
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="app">
// //       <header>
// //         <h1>SmartED</h1>
// //         <p>Hospital Waiting Time Prediction & Analytics System</p>
// //       </header>

// //       <main>
// //         <section className="card">
// //           <h2>Patient Waiting Time Prediction</h2>

// //           <p>
// //             Enter patient and hospital information to predict waiting time.
// //           </p>

// //           <form onSubmit={handleSubmit}>
// //             <div className="form-grid">
// //               <input
// //                 type="number"
// //                 name="age"
// //                 placeholder="Age"
// //                 value={formData.age}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <select
// //                 name="gender"
// //                 value={formData.gender}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Gender</option>
// //                 <option>Male</option>
// //                 <option>Female</option>
// //               </select>

// //               <select
// //                 name="department"
// //                 value={formData.department}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Department</option>
// //                 <option>Emergency</option>
// //                 <option>Cardiology</option>
// //                 <option>Orthopedics</option>
// //                 <option>Neurology</option>
// //                 <option>General Medicine</option>
// //               </select>

// //               <select
// //                 name="triage_level"
// //                 value={formData.triage_level}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Triage Level</option>
// //                 <option value="1">Level 1</option>
// //                 <option value="2">Level 2</option>
// //                 <option value="3">Level 3</option>
// //                 <option value="4">Level 4</option>
// //                 <option value="5">Level 5</option>
// //               </select>

// //               <input
// //                 type="number"
// //                 name="arrival_hour"
// //                 placeholder="Arrival Hour (0-23)"
// //                 min="0"
// //                 max="23"
// //                 value={formData.arrival_hour}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <select
// //                 name="day_of_week"
// //                 value={formData.day_of_week}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Day</option>
// //                 <option>Monday</option>
// //                 <option>Tuesday</option>
// //                 <option>Wednesday</option>
// //                 <option>Thursday</option>
// //                 <option>Friday</option>
// //                 <option>Saturday</option>
// //                 <option>Sunday</option>
// //               </select>

// //               <input
// //                 type="number"
// //                 name="patients_waiting"
// //                 placeholder="Patients Waiting"
// //                 value={formData.patients_waiting}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <input
// //                 type="number"
// //                 name="doctors_available"
// //                 placeholder="Doctors Available"
// //                 value={formData.doctors_available}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <input
// //                 type="number"
// //                 name="nurses_available"
// //                 placeholder="Nurses Available"
// //                 value={formData.nurses_available}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <input
// //                 type="number"
// //                 name="hospital_occupancy"
// //                 placeholder="Hospital Occupancy (%)"
// //                 value={formData.hospital_occupancy}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <input
// //                 type="number"
// //                 name="emergency_cases"
// //                 placeholder="Emergency Cases"
// //                 value={formData.emergency_cases}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               <input
// //                 type="number"
// //                 name="previous_avg_wait"
// //                 placeholder="Previous Average Wait (min)"
// //                 value={formData.previous_avg_wait}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>

// //             <button type="submit">
// //               {loading ? "Predicting..." : "Predict Waiting Time"}
// //             </button>
// //           </form>

// //           {result && !result.error && (
// //             <div className="result">
// //               <h2>Prediction Result</h2>

// //               <h3>{result.predicted_wait_time} minutes</h3>

// //               <p>
// //                 Status: <strong>{result.status}</strong>
// //               </p>

// //               <p>
// //                 Estimated range: {result.lower_bound} – {result.upper_bound}{" "}
// //                 minutes
// //               </p>
// //             </div>
// //           )}

// //           {result?.error && (
// //             <div className="error">
// //               {result.error}
// //             </div>
// //           )}
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     age: "",
//     gender: "",
//     department: "",
//     triage_level: "",
//     arrival_hour: "",
//     day_of_week: "",
//     patients_waiting: "",
//     doctors_available: "",
//     nurses_available: "",
//     hospital_occupancy: "",
//     emergency_cases: "",
//     previous_avg_wait: "",
//   });

//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setResult(null);

//     const day = formData.day_of_week;

//     const dataToSend = {
//       age: Number(formData.age),
//       gender: formData.gender,
//       department: formData.department,
//       triage_level: Number(formData.triage_level),
//       arrival_hour: Number(formData.arrival_hour),
//       day_of_week: day,
//       is_weekend: day === "Saturday" || day === "Sunday" ? 1 : 0,
//       patients_waiting: Number(formData.patients_waiting),
//       doctors_available: Number(formData.doctors_available),
//       nurses_available: Number(formData.nurses_available),
//       hospital_occupancy: Number(formData.hospital_occupancy),
//       emergency_cases: Number(formData.emergency_cases),
//       previous_avg_wait: Number(formData.previous_avg_wait),
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) {
//         throw new Error("Prediction request failed");
//       }

//       const data = await response.json();
//       setResult(data);
//     } catch (error) {
//       setResult({
//         error: "Unable to connect to the prediction server.",
//       });
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="app">
//       <nav className="navbar">
//         <div className="nav-logo">SmartED</div>

//         <div className="nav-links">
//           <Link to="/">Prediction</Link>
//           <Link to="/dashboard">Dashboard</Link>
//         </div>
//       </nav>

//       <header>
//         <h1>SmartED</h1>
//         <p>Hospital Waiting Time Prediction & Analytics System</p>
//       </header>

//       <main>
//         <section className="card">
//           <h2>Patient Waiting Time Prediction</h2>

//           <p>
//             Enter patient and hospital information to predict waiting time.
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="form-grid">
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 required
//               />

//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//               </select>

//               <select
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Department</option>
//                 <option>Emergency</option>
//                 <option>Cardiology</option>
//                 <option>Orthopedics</option>
//                 <option>Neurology</option>
//                 <option>General Medicine</option>
//               </select>

//               <select
//                 name="triage_level"
//                 value={formData.triage_level}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Triage Level</option>
//                 <option value="1">Level 1</option>
//                 <option value="2">Level 2</option>
//                 <option value="3">Level 3</option>
//                 <option value="4">Level 4</option>
//                 <option value="5">Level 5</option>
//               </select>

//               <input
//                 type="number"
//                 name="arrival_hour"
//                 placeholder="Arrival Hour (0-23)"
//                 min="0"
//                 max="23"
//                 value={formData.arrival_hour}
//                 onChange={handleChange}
//                 required
//               />

//               <select
//                 name="day_of_week"
//                 value={formData.day_of_week}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Day</option>
//                 <option>Monday</option>
//                 <option>Tuesday</option>
//                 <option>Wednesday</option>
//                 <option>Thursday</option>
//                 <option>Friday</option>
//                 <option>Saturday</option>
//                 <option>Sunday</option>
//               </select>

//               <input
//                 type="number"
//                 name="patients_waiting"
//                 placeholder="Patients Waiting"
//                 value={formData.patients_waiting}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="number"
//                 name="doctors_available"
//                 placeholder="Doctors Available"
//                 value={formData.doctors_available}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="number"
//                 name="nurses_available"
//                 placeholder="Nurses Available"
//                 value={formData.nurses_available}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="number"
//                 name="hospital_occupancy"
//                 placeholder="Hospital Occupancy (%)"
//                 value={formData.hospital_occupancy}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="number"
//                 name="emergency_cases"
//                 placeholder="Emergency Cases"
//                 value={formData.emergency_cases}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="number"
//                 name="previous_avg_wait"
//                 placeholder="Previous Average Wait (min)"
//                 value={formData.previous_avg_wait}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button type="submit">
//               {loading ? "Predicting..." : "Predict Waiting Time"}
//             </button>
//           </form>

//           {result && !result.error && (
//             <div className="result">
//               <h2>Prediction Result</h2>

//               <h3>{result.predicted_wait_time} minutes</h3>

//               <p>
//                 Status: <strong>{result.status}</strong>
//               </p>

//               <p>
//                 Estimated range: {result.lower_bound} – {result.upper_bound}{" "}
//                 minutes
//               </p>
//             </div>
//           )}

//           {result?.error && (
//             <div className="error">
//               {result.error}
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    department: "",
    triage_level: "",
    arrival_hour: "",
    day_of_week: "",
    patients_waiting: "",
    doctors_available: "",
    nurses_available: "",
    hospital_occupancy: "",
    emergency_cases: "",
    previous_avg_wait: "",
  });

  const [result, setResult] = useState(null);
  const [explanation, setExplanation] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    setExplanation([]);

    const day = formData.day_of_week;

    const dataToSend = {
      age: Number(formData.age),
      gender: formData.gender,
      department: formData.department,
      triage_level: Number(formData.triage_level),
      arrival_hour: Number(formData.arrival_hour),
      day_of_week: day,
      is_weekend: day === "Saturday" || day === "Sunday" ? 1 : 0,
      patients_waiting: Number(formData.patients_waiting),
      doctors_available: Number(formData.doctors_available),
      nurses_available: Number(formData.nurses_available),
      hospital_occupancy: Number(formData.hospital_occupancy),
      emergency_cases: Number(formData.emergency_cases),
      previous_avg_wait: Number(formData.previous_avg_wait),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const data = await response.json();
      setResult(data);

      const explanationResponse = await fetch(
        "http://127.0.0.1:8000/explain",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (explanationResponse.ok) {
        const explanationData = await explanationResponse.json();

        setExplanation(
          explanationData.explanation
            .filter((item) => Math.abs(item.impact) > 0.01)
            .slice(0, 5)
        );
      }
    } catch (error) {
      setResult({
        error: "Unable to connect to the prediction server.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo">SmartED</div>

        <div className="nav-links">
          <Link to="/">Prediction</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/history">History</Link>
           <Link to="/about">About</Link>
        </div>
      </nav>

      <header>
        <h1>SmartED</h1>
        <p>Hospital Waiting Time Prediction & Analytics System</p>
      </header>

      <main>
        <section className="card">
          <h2>Patient Waiting Time Prediction</h2>

          <p>
            Enter patient and hospital information to predict waiting time.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option>Emergency</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>General Medicine</option>
              </select>

              <select
                name="triage_level"
                value={formData.triage_level}
                onChange={handleChange}
                required
              >
                <option value="">Select Triage Level</option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
              </select>

              <input
                type="number"
                name="arrival_hour"
                placeholder="Arrival Hour (0-23)"
                min="0"
                max="23"
                value={formData.arrival_hour}
                onChange={handleChange}
                required
              />

              <select
                name="day_of_week"
                value={formData.day_of_week}
                onChange={handleChange}
                required
              >
                <option value="">Select Day</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>

              <input
                type="number"
                name="patients_waiting"
                placeholder="Patients Waiting"
                value={formData.patients_waiting}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="doctors_available"
                placeholder="Doctors Available"
                value={formData.doctors_available}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="nurses_available"
                placeholder="Nurses Available"
                value={formData.nurses_available}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="hospital_occupancy"
                placeholder="Hospital Occupancy (%)"
                value={formData.hospital_occupancy}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="emergency_cases"
                placeholder="Emergency Cases"
                value={formData.emergency_cases}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="previous_avg_wait"
                placeholder="Previous Average Wait (min)"
                value={formData.previous_avg_wait}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">
              {loading ? "Predicting..." : "Predict Waiting Time"}
            </button>
          </form>

          {result && !result.error && (
            <div className="result">
              <h2>Prediction Result</h2>

              <h3>{result.predicted_wait_time} minutes</h3>

              <p>
                Status: <strong>{result.status}</strong>
              </p>

              <p>
                Estimated range: {result.lower_bound} – {result.upper_bound}{" "}
                minutes
              </p>

              {explanation.length > 0 && (
                <div className="explanation">
                  <h2>Why this prediction?</h2>

                  <p className="explanation-subtitle">
                    Top factors influencing the predicted waiting time
                  </p>

                  <div className="explanation-list">
                    {explanation.map((item, index) => (
                      <div className="explanation-item" key={index}>
                        <span className="explanation-feature">
                          {item.feature
                            .replace("numeric__", "")
                            .replace("categorical__", "")
                            .replaceAll("_", " ")}
                        </span>

                        <span
                          className={
                            item.impact > 0
                              ? "impact-positive"
                              : "impact-negative"
                          }
                        >
                          {item.impact > 0 ? "↑" : "↓"}{" "}
                          {Math.abs(item.impact).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="explanation-note">
                    Positive values increase the predicted waiting time,
                    while negative values decrease it.
                  </p>
                </div>
              )}
            </div>
          )}

          {result?.error && (
            <div className="error">
              {result.error}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
