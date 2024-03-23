import React, { useState } from "react";
import axios from "axios";
import "./JobComponent.css";

const PostJobsComponent = () => {
  const [jobFormData, setJobFormData] = useState({
    jobTitle: "",
    jobType: "FULL_TIME",
    jobLocation: "",
    validTill: "",
    jobDescription: "",
    companyWebsite: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/post-job", jobFormData);
      // console.log("Job posted successfully:", response.data);
      setSuccessMessage("Job posted successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error posting job:", error);
      
    }

    setJobFormData({
      jobTitle: "",
      jobType: "FULL_TIME",
      jobLocation: "",
      validTill: "",
      jobDescription: "",
      companyWebsite: "",
    });
  };

  return (
    <div className="post-jobs-container">
      <div className="post-jobs-form">
        <h1>Post Job</h1>
        {/* Display success message */}
        <div className="success-message">{successMessage}</div>
        <form onSubmit={handleSubmit}>
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={jobFormData.jobTitle}
            onChange={handleChange}
            required
          />
          <label>Job Type</label>
          <select
            name="jobType"
            value={jobFormData.jobType}
            onChange={handleChange}
            required
          >
            <option value="DAILY_BASE">Daily Base</option>
            <option value="HOURLY_BASE">Hourly Base</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="INTERNSHIP">Internship</option>
          </select>
          <label>Job Location</label>
          <input
            type="text"
            name="jobLocation"
            value={jobFormData.jobLocation}
            onChange={handleChange}
            required
          />
          <label>Valid Till</label>
          <input
            type="date"
            name="validTill"
            value={jobFormData.validTill}
            onChange={handleChange}
            required
          />
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            value={jobFormData.jobDescription}
            onChange={handleChange}
            required
          />
          <label>Company Website</label>
          <input
            type="text"
            name="companyWebsite"
            value={jobFormData.companyWebsite}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Back button */}
      <button
        className="back-button"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
};

export default PostJobsComponent;
