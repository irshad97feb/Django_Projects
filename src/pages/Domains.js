import "./Domains.css";

export default function Domains() {
  const domains = [
    {
      title: "Banking & Finance",
      desc: "Secure and scalable solutions for financial services and digital banking.",
      icon: "🏦",
    },
    {
      title: "Healthcare",
      desc: "Healthcare applications, data platforms and automation for hospitals.",
      icon: "🏥",
    },
    {
      title: "E-Commerce",
      desc: "High-performance online stores, payment integration and analytics.",
      icon: "🛒",
    },
    {
      title: "Education",
      desc: "Learning management systems, portals and e-learning platforms.",
      icon: "🎓",
    },
    {
      title: "Travel & Tourism",
      desc: "Booking platforms, OTA integrations and automation solutions.",
      icon: "✈️",
    },
    {
      title: "Manufacturing",
      desc: "Industry automation, dashboards and workflow optimization systems.",
      icon: "🏭",
    },
    {
      title: "Telecom",
      desc: "Operations support, monitoring and scalable telecom applications.",
      icon: "📡",
    },
    {
      title: "IT & Software",
      desc: "Product engineering, cloud solutions, DevOps and modern APIs.",
      icon: "💻",
    },
  ];

  return (
    <div className="domains-page">
      {/* Banner */}
      <section className="domains-banner">
        <div className="domains-banner-overlay">
          <h1>Domains</h1>
          <p>Industries we serve with our innovative technology solutions</p>
        </div>
      </section>

      {/* Intro */}
      <section className="domains-intro container">
        <h2>Our Expertise Across Multiple Domains</h2>
        <p>
          At <b>SSGI Analytics</b>, we build robust solutions for different
          industries. Our team has hands-on experience in developing scalable
          systems, automation platforms, and cloud-based applications for
          business growth.
        </p>
      </section>

      {/* Domain Cards */}
      <section className="domains-grid-section">
        <div className="container">
          <div className="domains-grid">
            {domains.map((d, i) => (
              <div key={i} className="domain-card">
                <div className="domain-icon">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="domains-cta">
        <div className="container">
          <h2>Want to build something for your domain?</h2>
          <p>Let’s discuss your project requirements with SSGI Analytics.</p>
          <a className="cta-btn" href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
