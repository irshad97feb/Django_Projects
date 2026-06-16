import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo-link">
        <h2 className="logo">SSGI Analytics</h2>
      </Link>

      <div className="links">
        <Link className="link" to="/about">About</Link>

        {/* ✅ Services Dropdown */}
        <div className="dropdown">
          <span className="link dropdown-title">Services ▾</span>

          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/services/salesforce">Salesforce</Link>
            <Link className="dropdown-item" to="/services/data-sciences">Data Sciences</Link>
            <Link className="dropdown-item" to="/services/iot">Internet of Things</Link>
            <Link className="dropdown-item" to="/services/cloud-computing">Cloud Computing</Link>
            <Link className="dropdown-item" to="/services/artificial-intelligence">Artificial Intelligence</Link>
            <Link className="dropdown-item" to="/services/machine-learning">Machine Learning</Link>
            <Link className="dropdown-item" to="/services/sap-services">SAP Services</Link>
          </div>
        </div>

        <Link className="link" to="/domains">Domains</Link>
        <Link className="link" to="/careers">Careers</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>
      <div className="social-icons">
        <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
        >
            <FaFacebookF />
        </a>

        <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
        >
            <FaLinkedinIn />
        </a>
        </div>

    </nav>
  );
}
