import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Internships.css";

function Internships() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [internshipsData, setInternshipsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInternships() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/job-offer`
        );
        setInternshipsData(res.data);
      } catch (err) {
        setError("Failed to load internships.");
      } finally {
        setLoading(false);
      }
    }
    fetchInternships();
  }, []);

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
        <button className="internships-create-btn">
          + Create New Internship
        </button>
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

      {loading && <div className="loading">Loading internships...</div>}
      {error && <div className="error">{error}</div>}

      <div className="internships-list">
        {!loading && !error && filteredInternships.length === 0 && (
          <div className="no-results">No internships found.</div>
        )}
        {!loading &&
          !error &&
          filteredInternships.map((item) => (
            <div className="internship-card" key={item.id}>
              <div className="internship-img">
                <img src={item.image || "/vite.svg"} alt={item.title} />
              </div>
              <div className="internship-info">
                <h2>{item.title}</h2>
                <p className="company">{item.company}</p>
                <p className="location">{item.location}</p>
                <div className="internship-meta">
                  <span className="type">{item.type}</span>
                  <span
                    className={`status ${item.status?.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                  <span className="applicants">
                    {item.applicants || 0} applicants
                  </span>
                </div>
              </div>
              <button className="manage-btn">Manage</button>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Internships;