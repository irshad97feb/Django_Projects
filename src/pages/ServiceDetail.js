import { useParams, Link } from "react-router-dom";
import "./ServiceDetail.css";

const serviceData = {
  "salesforce": {
    title: "Salesforce Services",
    desc: "We provide Salesforce development, customization, integration and support for your enterprise needs.",
  },
  "data-sciences": {
    title: "Data Sciences",
    desc: "We help you extract valuable insights from your data using analytics, dashboards, and predictive modeling.",
  },
  "iot": {
    title: "Internet of Things (IoT)",
    desc: "We build IoT solutions for connected devices, monitoring systems and real-time analytics platforms.",
  },
  "cloud-computing": {
    title: "Cloud Computing",
    desc: "We deploy cloud-native applications and provide DevOps, Kubernetes and scalable infrastructure solutions.",
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    desc: "We build AI-powered solutions like chatbots, smart automation and intelligent systems for businesses.",
  },
  "machine-learning": {
    title: "Machine Learning",
    desc: "We develop machine learning models for classification, prediction, recommendations and automation.",
  },
  "sap-services": {
    title: "SAP Services",
    desc: "We provide SAP consulting, implementation, integration and support services for your organization.",
  },
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = serviceData[serviceSlug];

  if (!service) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Service not found ❌</h2>
        <Link to="/services">Go back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <section className="service-banner">
        <div className="service-banner-overlay">
          <h1>{service.title}</h1>
          <p>SSGI Analytics | Professional IT Services</p>
        </div>
      </section>

      <section className="service-content container">
        <h2>Overview</h2>
        <p>{service.desc}</p>

        <div className="service-box">
          <h3>Why choose us?</h3>
          <ul>
            <li>✅ Industry-standard best practices</li>
            <li>✅ Experienced team and proven delivery</li>
            <li>✅ Scalable and secure solutions</li>
            <li>✅ Support and long-term partnership</li>
          </ul>
        </div>

        <Link className="service-btn" to="/contact">Contact Us</Link>
      </section>
    </div>
  );
}
