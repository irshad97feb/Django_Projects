import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* Banner */}
      <section className="about-banner">
        <div className="about-banner-overlay">
          <h1>About Us</h1>
          <p>Know more about SSGI Analytics</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container">
        <div className="about-left">
          <h2>About SSGI Analytics</h2>
          <p>
            Founded with the mission to deliver high quality software solutions,
            SSGI Analytics is a team of passionate engineers and technology enthusiasts.
          </p>
          <p>
            We help businesses grow by providing reliable services in software development,
            cloud, automation, and analytics.
          </p>
          <p>
            We blend human intelligence with technology to support clients in achieving
            long-term success.
          </p>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60"
            alt="Team Working"
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <h2>
          "Our team work hard to ensure, <br /> our Client Smile!"
        </h2>
      </section>

      {/* Mission Section */}
      <section className="mission-section container">
        <div className="mission-left">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=60"
            alt="Mission"
          />
        </div>

        <div className="mission-right">
          <h2>Our Mission</h2>
          <p>
            Our mission is to build modern digital solutions by mastering the art of
            automation, cloud, and analytics.
          </p>
          <p>
            We focus on building scalable systems for industries like telecom, finance,
            travel, healthcare and enterprise businesses.
          </p>
          <p>
            We believe technology should simplify and accelerate business growth.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <p className="services-subtitle">Scale your business using our services</p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Modern websites using React, Django, REST APIs and SEO friendly design.</p>
            </div>

            <div className="service-card">
              <h3>Automation</h3>
              <p>Workflow automation to reduce errors, save time and improve efficiency.</p>
            </div>

            <div className="service-card">
              <h3>Cloud & DevOps</h3>
              <p>Kubernetes, CI/CD pipelines, monitoring and production deployments.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
