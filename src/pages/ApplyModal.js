import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ApplyModal.css";

export default function ApplyModal({ job, onClose }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    job_title: job.title,
    job_code: job.code,
    full_name: "",
    email: "",
    phone: "",
    experience_years: "",
    current_location: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));

      if (resumeFile) {
        data.append("resume", resumeFile);
      }

      await axios.post("http://127.0.0.1:8000/api/apply/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onClose();
      navigate("/thank-you"); // ✅ redirect to thank you page
    } catch (err) {
      alert("❌ Failed to submit application");
      console.log(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Apply for {job.title}</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          <input
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            name="experience_years"
            placeholder="Experience (Years)"
            value={formData.experience_years}
            onChange={handleChange}
          />

          <input
            name="current_location"
            placeholder="Current Location"
            value={formData.current_location}
            onChange={handleChange}
          />

          {/* ✅ Resume Upload */}
          <label style={{ fontWeight: "bold", color: "#0b5ed7" }}>
            Upload Resume (PDF):
          </label>
          <input type="file" accept="application/pdf" onChange={handleFileChange} />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}
