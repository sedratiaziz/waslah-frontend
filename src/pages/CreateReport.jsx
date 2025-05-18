import React, { useState } from "react";
import "../styles/CreateReport.css";

const trainees = [
  "Mohammed Al-Saud",
  "John Doe",
  "Tim Smith"
];

function CreateReport() {
  const [trainee, setTrainee] = useState("");
  const [score, setScore] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <main className="create-report-main">
      <form className="create-report-form" onSubmit={handleSubmit}>
        <h1 className="create-report-title">Create a New Report</h1>
        <p className="create-report-subtitle">We ship within 2 working days</p>

        <label className="create-report-label" htmlFor="trainee">
          Trainee Name
        </label>
        <select
          id="trainee"
          className="create-report-select"
          value={trainee}
          onChange={(e) => setTrainee(e.target.value)}
        >
          <option value="">Select trainee</option>
          {trainees.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label className="create-report-label" htmlFor="score">
          Score (1 - 10)
        </label>
        <div className="create-report-slider-row">
          <input
            id="score"
            type="range"
            min="1"
            max="10"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="create-report-slider"
          />
          <span className="create-report-score-value">{score}</span>
        </div>

        <label className="create-report-label" htmlFor="feedback">
          Feedback
        </label>
        <textarea
          id="feedback"
          className="create-report-textarea"
          placeholder="Write your feedback here"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button className="create-report-submit" type="submit">
          Submit Report
        </button>
      </form>
    </main>
  );
}

export default CreateReport;