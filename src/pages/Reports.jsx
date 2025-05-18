import React from "react";
import "../styles/Reports.css";

const reportsData = [
  {
    id: 1,
    title: "Mohammed's Application",
    role: "Student",
    status: "Enabled",
    image: "/report-img1.jpg",
  },
  {
    id: 2,
    title: "John's Weekly Report",
    role: "Trainee",
    status: "Enabled",
    image: "/report-img2.jpg",
  },
  {
    id: 3,
    title: "Tim's Weekly Report",
    role: "Trainee",
    status: "Enabled",
    image: "/report-img3.jpg",
  },
];

function Reports() {
  return (
    <main className="reports-main">
      <h1 className="reports-title">Reports</h1>
      <div className="reports-list">
        {reportsData.map((report) => (
          <div className="report-card" key={report.id}>
            <div className="report-info">
              <h2 className="report-card-title">{report.title}</h2>
              <p className="report-role">{report.role}</p>
              <span className="report-status">
                Enabled <span className="status-icon">✔️</span>
              </span>
            </div>
            <div className="report-img">
              <img src={report.image} alt={report.title} />
            </div>
          </div>
        ))}
      </div>
      <button className="reports-fab">
        <span role="img" aria-label="edit">🖉</span>
      </button>
    </main>
  );
}

export default Reports;