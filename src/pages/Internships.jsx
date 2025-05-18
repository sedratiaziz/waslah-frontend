import React, { useState } from "react";
import "../styles/Internships.css";

const internshipsData = [
  {
    id: 1,
    image: "/internship-img1.jpg",
    title: "UX Designer",
    company: "Deepmind AI",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    applicants: 120,
    status: "Active",
  },
  {
    id: 2,
    image: "/internship-img2.jpg",
    title: "Frontend Developer",
    company: "Google",
    location: "Jeddah, Saudi Arabia",
    type: "Part-time",
    applicants: 80,
    status: "Closed",
  },
  {
    id: 3,
    image: "/internship-img3.jpg",
    title: "Data Analyst",
    company: "Microsoft",
    location: "Dammam, Saudi Arabia",
    type: "Remote",
    applicants: 60,
    status: "Active",
  },
];

function Internships() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredInternships = internshipsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" ? true : item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="internships-main">
      <div className="internships-header">
        <div>
          <h1>Internships</h1>
          <p className="internships-subtitle">
            Manage your posted internship opportunities
          </p>
        </div>
        <button className="internships-create-btn">+ Create New Internship</button>
      </div>

      <div className="internships-controls">
        <div className="internships-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search internships..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="internships-filters">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={filter === "Active" ? "active" : ""}
            onClick={() => setFilter("Active")}
          >
            Active
          </button>
          <button
            className={filter === "Closed" ? "active" : ""}
            onClick={() => setFilter("Closed")}
          >
            Closed
          </button>
        </div>
      </div>

      <div className="internships-list">
        {filteredInternships.map((item) => (
          <div className="internship-card" key={item.id}>
            <div className="internship-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="internship-info">
              <h2>{item.title}</h2>
              <p className="company">{item.company}</p>
              <p className="location">{item.location}</p>
              <div className="internship-meta">
                <span className="type">{item.type}</span>
                <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                <span className="applicants">{item.applicants} applicants</span>
              </div>
            </div>
            <button className="manage-btn">Manage</button>
          </div>
        ))}
        {filteredInternships.length === 0 && (
          <div className="no-results">No internships found.</div>
        )}
      </div>
    </main>
  );
}

export default Internships;