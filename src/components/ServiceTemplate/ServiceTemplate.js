import "./ServiceTemplate.css";
import { Link } from "react-router-dom";

export default function ServiceTemplate({
  title,
  subtitle,
  bannerImage,
  introTitle,
  introText,
  offeringsTitle,
  offeringsSubtitle,
  offerings,
  whyTitle,
  whyPoints,
  ctaTitle,
  ctaText,
  processTitle,
  processSteps,
}) {
  return (
    <div className="service-template-page">
      {/* ✅ Banner */}
      <section
        className="st-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="st-banner-overlay">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>

      {/* ✅ Intro */}
      <section className="st-intro container">
        <h2>{introTitle}</h2>
        <p>{introText}</p>
      </section>

      {/* ✅ Offerings */}
      <section className="st-offerings">
        <div className="container">
          <h2 className="st-section-title">{offeringsTitle}</h2>
          <p className="st-section-subtitle">{offeringsSubtitle}</p>

          <div className="st-grid">
            {offerings.map((item, i) => (
              <div key={i} className="st-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose + CTA */}
      <section className="st-why container">
        <div className="st-why-box">
          <div>
            <h2>{whyTitle}</h2>
            <ul>
              {whyPoints.map((p, i) => (
                <li key={i}>✅ {p}</li>
              ))}
            </ul>
          </div>

          <div className="st-cta">
            <h3>{ctaTitle}</h3>
            <p>{ctaText}</p>
            <Link to="/contact" className="st-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Process */}
      <section className="st-process">
        <div className="container">
          <h2 className="st-section-title">{processTitle}</h2>

          <div className="st-process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="st-process-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
