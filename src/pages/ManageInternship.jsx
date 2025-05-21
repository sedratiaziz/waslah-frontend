import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router";

function ManageInternship() {
  const { offerId } = useParams();
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numApplicants, setNumApplicants] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInternship() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/job-offer/${offerId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setInternship(res.data);
        setNumApplicants(res.data.applications ? res.data.applications.length : 0);
      } catch (err) {
        setError("Failed to load internship details.");
      } finally {
        setLoading(false);
      }
    }
    fetchInternship();
  }, [offerId]);

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this internship?")) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/job-offer/${offerId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/internships");
    } catch (err) {
      setError("Failed to delete internship.");
    }
  }

  
  return (
    <main className="manage-internship-main">
      {loading ? (
        <div>Loading internship details...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : internship ? (
        <div className="internship-details">
          <h1>{internship.title}</h1>
          <p>
            <strong>Corporation:</strong> {internship.CorporationName}
          </p>
          <p>
            <strong>Job Detail:</strong> {internship.jobDetail}
          </p>
          <p>
            <strong>Requirements:</strong> {internship.requirements}
          </p>
          <p>
            <strong>Start Date:</strong>{" "}
            {new Date(internship.startDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Application End Date:</strong>{" "}
            {new Date(internship.applicationEndDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Number of Applicants:</strong> {numApplicants}
          </p>
          <Link to={`/${offerId}/edit`} >
            <button className="edit-btn">
                Edit Internship
            </button>
          </Link>
            <button onClick={handleDelete} className="delete-btn" style={{marginLeft: "10px"}}>
                Delete Internship
            </button>
        </div>
      ) : null}
    </main>
  );
}

export default ManageInternship;