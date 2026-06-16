import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", formData);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      alert("❌ Failed to send message");
      console.log(err);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <section className="contact-banner">
        <div className="contact-banner-overlay">
          <h1>Contact Us</h1>
          <p>
            If you want to collaborate with us or have any doubt, we are just a
            call away.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards container">
        <div className="contact-card">
          <h3>Head Office India</h3>
          <p>
            #402, 4th Floor, ECC Road, WhiteField, Bangalore,
            560066
          </p>
          <p className="highlight">📞 +91 9113059121</p>
        </div>

        {/* <div className="contact-card">
          <h3>UK Office</h3>
          <p>
            170 Draycott Avenue, Kenton, Middlesex HA3 0BZ
          </p>
          <p className="highlight">📞 +44 20 3290 8184</p>
        </div> */}

        {/* <div className="contact-card">
          <h3>USA Office</h3>
          <p>
            447 Broadway, 2nd Floor, Suite #377, New York, NY 10013
          </p>
          <p className="highlight">📞 +1 929 661 3365</p>
        </div> */}

        <div className="contact-card">
          <h3>Contact Us</h3>
          <p className="highlight">✉️ info@ssgianalytics.com</p>
          <p className="highlight">📞 +91 9113059121</p>
          {/* <p className="highlight">📞 +91 74004 26777</p> */}
        </div>
      </section>

      {/* India Offices
      <section className="india-offices">
        <div className="container">
          <h2>India Offices</h2>
          <p className="subtext">We are available across multiple cities</p>

          <div className="office-grid">
            <div className="office-box">
              <h4>Gurugram</h4>
              <p>
                2nd Floor, Augusta Point, Sector 53, Golf Course Road, Gurugram,
                122002
              </p>
            </div>

            <div className="office-box">
              <h4>Noida</h4>
              <p>
                Plot No. D, 107, Vyapar Marg, D Block, Sector 2, Noida, 201301
              </p>
            </div>

            <div className="office-box">
              <h4>Mumbai</h4>
              <p>
                2nd Floor, Kagalwala House, Plot No. 175, CST Road, Kalina,
                Santacruz East, Mumbai, 400098
              </p>
            </div>

            <div className="office-box">
              <h4>Hyderabad</h4>
              <p>
                LVS Arcade, Madhapur, Jubilee Enclave, HITEC City, Hyderabad,
                Telangana, 500081
              </p>
            </div>

            <div className="office-box">
              <h4>Bengaluru</h4>
              <p>
                Gopala Krishna Complex 45/3, Residency Road, MG Road, Bengaluru,
                Karnataka, 560025
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Leave Message + Form */}
      <section className="leave-message container">
        <div className="message-left">
          <h2>Leave us Message</h2>
          <p className="subtext">
            We promise to reply back as soon as possible.
          </p>

          <div className="contact-mini">
            <h4>India</h4>
            <p>✉️ info@ssgianalytics.com</p>
            <p>📞 +91 9113059121</p>
          </div>
{/* 
          <div className="contact-mini">
            <h4>United Kingdom</h4>
            <p>✉️ info.uk@ssgianalytics.com</p>
          </div>

          <div className="contact-mini">
            <h4>United States of America</h4>
            <p>✉️ info.usa@ssgianalytics.com</p>
            <p>📞 +1 929 661 3365</p>
          </div> */}
        </div>

        <div className="message-right">
          <h2>Let’s get in touch</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
