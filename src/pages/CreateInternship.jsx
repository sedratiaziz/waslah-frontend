import React, { useState } from "react";
import axios from "axios";
import "../styles/Internships.css";
import { useNavigate } from "react-router";

function CreateInternship() {
  const [formData, setFormData] = useState({
    title: "",
    jobDetail: "",
    requirements: "",
    CorporationName: "", // Must be a valid Corporation ObjectId
    startDate: "",
    applicationEndDate: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      // Do not send superVisor, backend will set it from JWT
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/job-offer`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setSuccess(true);
      setTimeout(() => navigate("/internships"), 1200);
    } catch (err) {
      setError("Failed to create internship. Make sure all fields are filled and Corporation ID is valid.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="internships-main">
      <form className="create-internship-form" onSubmit={handleSubmit}>
        <h1>Create New Job Offer</h1>
        <label>Title</label>
        <input name="title" value={formData.title} onChange={handleChange} required />
        <label>Job Detail</label>
        <textarea name="jobDetail" value={formData.jobDetail} onChange={handleChange} required />
        <label>Requirements</label>
        <textarea name="requirements" value={formData.requirements} onChange={handleChange} required />
        <label>Corporation Name</label>
        <input name="CorporationName" value={formData.CorporationName} onChange={handleChange} required placeholder="Enter Corporation ObjectId" />
        <label>Start Date</label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        <label>Application End Date</label>
        <input type="date" name="applicationEndDate" value={formData.applicationEndDate} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? "Creating..." : "Create Job Offer"}</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Job offer created!</div>}
      </form>
    </main>
  );
}

export default CreateInternship;
