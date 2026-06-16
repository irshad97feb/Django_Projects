import "./ServicesList.css";
import { Link } from "react-router-dom";

export default function ServicesList() {
  const services = [
    {
      title: "Salesforce",
      desc: "CRM implementation, customization, and integration.",
      path: "/services/salesforce",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "Data Sciences",
      desc: "Analytics, dashboards, predictive intelligence and insights.",
      path: "/services/data-sciences",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "Internet of Things",
      desc: "Device connectivity, real-time telemetry and monitoring.",
      path: "/services/iot",
      img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "Cloud Computing",
      desc: "Cloud migration, DevOps, Kubernetes and automation.",
      path: "/services/cloud-computing",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "Artificial Intelligence",
      desc: "AI automation, chatbots, document intelligence and vision.",
      path: "/services/artificial-intelligence",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "Machine Learning",
      desc: "Forecasting, classification, recommendations and MLOps.",
      path: "/services/machine-learning",
      img: "https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=1400&q=60",
    },
    {
      title: "SAP Services",
      desc: "SAP consulting, UI5/Fiori, integrations and support.",
      path: "/services/sap-services",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=60)",
    },
  ];

  return (
    <div className="services-list-page">
      {/* ✅ Banner */}
      <section className="services-banner">
        <div className="services-banner-overlay">
          <h1>Our Services</h1>
          <p>Explore the services offered by SSGI Analytics</p>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <section className="services-list-section container">
        <h2 className="section-title">All Services</h2>
        <p className="section-subtitle">
          Click on any service to know more
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={service.path} className="service-box" key={index}>
              <img src={service.img} alt={service.title} />
              <div className="service-box-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
