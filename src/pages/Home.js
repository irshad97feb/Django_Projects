import "./Home.css";
import { Link } from "react-router-dom";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import robotImg from "../images/robot.jpg";
import mlIcon from "../images/machine_learning.jpg";
import ccIcon from "../images/cloud_computing.png";


export default function Home() {
  return (
    <div className="home-page">

        {/* ✅ HERO SLIDER */}
      <section className="hero-slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=60)",
              }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <h1>Advancing Artificial Intelligence for the future with new technology</h1>
                  <Link to="/contact" className="hero-btn">Get in Touch</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=60)",
              }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <h1>Grow faster with Automation, Cloud and Digital Transformation</h1>
                  <Link to="/contact" className="hero-btn">Get in Touch</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60)",
              }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <h1>We deliver scalable products using React, Django and Cloud</h1>
                  <Link to="/contact" className="hero-btn">Get in Touch</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ✅ HERO SECTION
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Advancing Artificial Intelligence for the future with new technology</h1>
            <Link to="/contact" className="hero-btn">Get in Touch</Link>
          </div>
        </div>
      </section> */}

      {/* ✅ OUR SERVICES */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Scale your business using our services</p>

            <div className="service-grid">
            <div className="service-card-dark">
                <div className="service-icon">
                    <img
                        src={robotImg}
                        alt="RPA"
                    />
                    {/* https://www.istockphoto.com/photos/machine-learning-robot */}
                </div>
                <h3>Robotic Process Automation (RPA)</h3>
                <p>
                Our industry-leading frameworks are capable of automating the business
                processes while minimizing the scope of error, improving the quality and
                expediting the speed of the process.
                </p>
            </div>

            <div className="service-card-dark">
                <div className="service-icon">
                    <img src={mlIcon} alt="Machine Learning" />
                </div>
              <h3>Machine Learning</h3>
              <p>
                Our expertise in integrating machine learning with organizational goals makes
                us the right implementation partner for AI use-cases.
              </p>
            </div>

            <div className="service-card-dark">
                <div className="service-icon">
                    <img src={ccIcon} alt="Cloud Computing" />
                </div>
              <h3>Cloud Computing</h3>
              <p>
                We integrate hybrid cloud models and latest technologies to build secure,
                scalable solutions for enterprises.
              </p>
            </div>
          </div>

          <Link to="/services" className="view-services-btn">
            View All Services
          </Link>
        </div>
      </section>

      {/* ✅ TALK TO AN EXPERT */}
      <section className="expert-section">
        <div className="container expert-box">
          <div>
            <h2>Talk to an Expert</h2>
            <p>
              Schedule time to meet with one of our product experts. We’ll take it from there.
            </p>
          </div>
          <Link to="/contact" className="expert-btn">Let's talk</Link>
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section className="about-home">
        <div className="container about-grid">
          <div className="about-text">
            <h3>About SSGI Analytics</h3>
            <p>
              Founded with a mission to master the art of artificial intelligence and automation,
              SSGI Analytics is a team of technology tinkerers and product enthusiasts.
            </p>
            <p>
              We are committed to delivering values like quality and time to our clients while
              overcoming every technological challenge.
            </p>
            <p>
              We blend human intelligence with technology to help our clients achieve their goals.
            </p>

            <Link to="/about" className="read-more-btn">Read More</Link>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60"
              alt="About"
            />
          </div>
        </div>
      </section>

      {/* ✅ CREATED WITH SCIENCE */}
<section className="science-section">
  <div className="container">
    <h2 className="section-title">Created with Science Made for Business</h2>
    <p className="section-subtitle">Simply intelligent.</p>

    <div className="science-grid">
      <div className="science-card">
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
          alt="Fractal Science"
        />
        <h3>Powered by Fractal Science</h3>
        <p>
          Accuracy and performance delivered using intelligent algorithms that
          require minimal datasets.
        </p>
      </div>

      <div className="science-card">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
          alt="Process Automation"
        />
        <h3>Process, not Task Automation</h3>
        <p>
          We automate complete business processes rather than isolated tasks,
          enabling real digital transformation.
        </p>
      </div>

      <div className="science-card">
        <img
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
          alt="Built for Business"
        />
        <h3>Built for Business Users</h3>
        <p>
          Our solutions are designed for business users with simple interfaces
          and scalable architectures.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
