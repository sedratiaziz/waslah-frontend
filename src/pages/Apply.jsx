import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

function Apply() {
  const { offerId } = useParams();
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [applyLoading, setApplyLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchInternship() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/job-offer/${offerId}`
        );
        setInternship(res.data);
      } catch (err) {
        setError("Failed to load internship details.");
      } finally {
        setLoading(false);
      }
    }
    fetchInternship();
  }, [offerId]);

  async function handleApply(e) {
    e.preventDefault();
    setApplyLoading(true);
    setError(null);
    setSuccess(false);
    try {
      // JWT token should be sent automatically if axios is configured, otherwise add headers
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/application/${offerId}/applications`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setSuccess(true);
      setTimeout(() => navigate("/internships"), 1200);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to apply. You may have already applied or are not authorized."
      );
    } finally {
      setApplyLoading(false);
    }
  }

  return (
    <main className="apply-main">
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
          <form onSubmit={handleApply}>
            <button type="submit" disabled={applyLoading || success}>
              {applyLoading
                ? "Applying..."
                : success
                ? "Applied!"
                : "Apply for this Internship"}
            </button>
          </form>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">Application submitted!</div>}
        </div>
      ) : null}
    </main>
  );
}

export default Apply;