import { useState } from "react";
import "./Careers.css";
import ApplyModal from "./ApplyModal";


const jobsData = [
  {
    title: "SAP UI5 (Front end) Developer",
    code: "004881",
    exp: "2 - 6 Years",
    location: "Pune / Bangalore / Hyderabad",
    domain: "",
    description: [
      "Hands-On experience in SAP UI5",
      "Strong Programming Experience with JavaScript, CSS3, HTML5 and ODATA services",
      "Good to have Android, PHP knowledge",
      "Exposure to development of applications using SAP IDE/NWD",
    ],
  },
  {
    title: "Finance International Solution Consultant",
    code: "04882",
    exp: "10 - 12 Years",
    location: "PAN INDIA",
    domain: "",
    description: [
      "10 - 12 years of experience in Oracle EBS Financial modules implementation",
      "Good knowledge of AP, FA, EBTAX , GL Modules",
      "Experience setting up statutory ledgers/environments for UK/Europe needs",
      "Proficient in writing Functional Design Documents and mapping requirements",
      "Good communication skills",
    ],
  },
  {
    title: "SAP NetWeaver Application Developer",
    code: "04885",
    exp: "2 - 6 Years",
    location: "Pune / Bangalore / Hyderabad",
    domain: "Telecom",
    description: [
      "Experience in Java Web Dynpro applications in SAP NetWeaver Developer Studio (NWDS)",
      "Strong knowledge of Advanced Web Dynpro for JAVA design paradigm",
      "Java SAP integration using JCO/JCA and ODATA services",
      "Strong in Java, SQL, REST & SOAP services",
      "Good to have SAP UI5, Android, PHP knowledge",
    ],
  },
  {
    title: "Salesforce Developer",
    code: "0002",
    exp: "3 - 4 Years",
    location: "Gurgaon",
    domain: "Telecom",
    description: [
      "Strong experience on SFDC configurations, Apex, VisualForce, Lightning",
      "Lightning administration and development experience",
      "Experience with LWC, batchable & scheduled jobs",
      "Strong SOQL, triggers, Salesforce database model knowledge",
      "Experience with Sales Cloud, Service Cloud & Knowledge",
    ],
  },
  {
    title: "Data Analyst",
    code: "0001",
    exp: "1 - 3 Years",
    location: "Gurgaon",
    domain: "BFSI",
    description: [
      "Experience in Business Analytics using descriptive/predictive techniques",
      "Good experience in Data Mining, Data Analysis and Predictive Modelling",
      "Good knowledge of PostgreSQL / MySQL / MS SQL",
      "Strong SQL query skills and relational data concepts",
      "Advanced knowledge of Microsoft Excel is essential",
    ],
  },
];

export default function Careers() {
  const [openJobIndex, setOpenJobIndex] = useState(null);

  const toggleJob = (index) => {
    setOpenJobIndex(openJobIndex === index ? null : index);
  };
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="careers-page">
      {/* Banner */}
      <section className="careers-banner">
        <div className="careers-banner-overlay">
          <h1>Careers</h1>
          <p>Join SSGI Analytics and build your future with us</p>
        </div>
      </section>

      {/* Intro */}
      <section className="careers-intro container">
        <h2>Work With Us</h2>
        <p>
          No global movement springs from individuals; it takes an entire team
          to achieve something big.
        </p>
        <p>
          Together at <b>SSGI Analytics</b>, we work hard, encourage each other,
          brainstorm non-stop and laugh a lot. Join us to revolutionise the way
          businesses are managed.
        </p>
      </section>

      {/* Job List */}
      <section className="jobs-section container">
        {jobsData.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-header" onClick={() => toggleJob(index)}>
              <h3>{job.title}</h3>
              <span className="toggle-btn">
                {openJobIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="job-meta">
              <p><b>Designation:</b> {job.title}</p>
              <p><b>Job code:</b> {job.code}</p>
              <p><b>Experience:</b> {job.exp}</p>
              <p><b>Location:</b> {job.location}</p>
              {job.domain && <p><b>Domain:</b> {job.domain}</p>}
            </div>

            {openJobIndex === index && (
              <div className="job-description">
                <h4>Job Description</h4>
                <ul>
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <button className="apply-btn" onClick={() => setSelectedJob(job)}>
                  Apply Now
                </button>

              </div>
            )}
          </div>
        ))}
      </section>
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
    </div>
  );
}
