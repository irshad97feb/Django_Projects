import { Link } from "react-router-dom";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <div className="thankyou-page">
      <div className="thankyou-box">
        <h1>✅ Thank You!</h1>
        <p>Your application has been submitted successfully.</p>
        <p>Our HR team will contact you soon.</p>

        <div className="thankyou-actions">
          <Link className="btn" to="/">Go to Home</Link>
          <Link className="btn outline" to="/careers">Back to Careers</Link>
        </div>
      </div>
    </div>
  );
}
