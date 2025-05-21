import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

function EditInternship() {
  const { offerId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    jobDetail: "",
    requirements: "",
    CorporationName: "",
    startDate: "",
    applicationEndDate: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
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
        setFormData({
          title: res.data.title || "",
          jobDetail: res.data.jobDetail || "",
          requirements: res.data.requirements || "",
          CorporationName: res.data.CorporationName || "",
          startDate: res.data.startDate ? res.data.startDate.slice(0, 10) : "",
          applicationEndDate: res.data.applicationEndDate ? res.data.applicationEndDate.slice(0, 10) : ""
        });
      } catch (err) {
        setError("Failed to load internship details.");
      } finally {
        setLoading(false);
      }
    }
    fetchInternship();
  }, [offerId]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/job-offer/${offerId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuccess(true);
      setTimeout(() => navigate(`/internships`), 1200);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to update internship. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="edit-internship-main" style={{
      maxWidth: 500,
      margin: "40px auto",
      background: "#f8fafc",
      borderRadius: 16,
      boxShadow: "0 4px 24px rgba(80,80,160,0.10)",
      padding: 32,
      textAlign: "center"
    }}>
      <h1 style={{color: "#3b3b6d", marginBottom: 24}}>Edit Internship</h1>
      {loading ? (
        <div>Loading internship details...</div>
      ) : (
        <form className="edit-internship-form" onSubmit={handleSubmit}>
          <label style={{display: "block", marginBottom: 8, fontWeight: 500}}>Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{width: "100%", padding: 8, marginBottom: 16, borderRadius: 6, border: "1px solid #b3b3e6"}}
          />
          <label style={{display: "block", marginBottom: 8, fontWeight: 500}}>Job Detail</label>
          <textarea
            name="jobDetail"
            value={formData.jobDetail}
            onChange={handleChange}
            required
            style={{width: "100%", padding: 8, marginBottom: 16, borderRadius: 6, border: "1px solid #b3b3e6", minHeight: 60}}
          />
          <label style={{display: "block", marginBottom: 8, fontWeight: 500}}>Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            style={{width: "100%", padding: 8, marginBottom: 16, borderRadius: 6, border: "1px solid #b3b3e6", minHeight: 60}}
          />
          <label style={{display: "block", marginBottom: 8, fontWeight: 500}}>Corporation Name</label>
          <input
            name="CorporationName"
            value={formData.CorporationName}
            onChange={handleChange}
            required
            style={{width: "100%", padding: 8, marginBottom: 16, borderRadius: 6, border: "1px solid #b3b3e6"}}
          />
          <label style={{display: "block", marginBottom: 8, fontWeight: 500}}>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            style={{width: "100%", padding: 8, marginBottom: 16, borderRadius: 6, border: "1px solid #b3b3e6"}}
          />
          <label style={{display: "block", marginBottom: 8, fontWeight: 500}}>Application End Date</label>
          <input
            type="date"
            name="applicationEndDate"
            value={formData.applicationEndDate}
            onChange={handleChange}
            required
            style={{width: "100%", padding: 8, marginBottom: 24, borderRadius: 6, border: "1px solid #b3b3e6"}}
          />
          <button
            type="submit"
            disabled={saving}
            style={{
              background: "#6366f1",
              color: "#fff",
              padding: "10px 28px",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(80,80,160,0.08)",
              transition: "background 0.2s"
            }}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          {error && <div className="error" style={{color: "#e53e3e", marginTop: 16}}>{error}</div>}
          {success && <div className="success" style={{color: "#38a169", marginTop: 16}}>Internship updated!</div>}
        </form>
      )}
    </main>
  );
}

export default EditInternship;