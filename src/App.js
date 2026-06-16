import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Domains from "./pages/Domains";
import ServiceDetail from "./pages/ServiceDetail";
import Careers from "./pages/Careers";
import ThankYou from "./pages/ThankYou";

import Salesforce from "./pages/services/Salesforce/Salesforce";
import DataSciences from "./pages/services/DataSciences/DataSciences";
import IoT from "./pages/services/IoT/IoT";
import CloudComputing from "./pages/services/CloudComputing/CloudComputing";
import ArtificialIntelligence from "./pages/services/ArtificialIntelligence/ArtificialIntelligence";
import MachineLearning from "./pages/services/MachineLearning/MachineLearning";
import SAPServices from "./pages/services/SAPServices/SAPServices";

import ServicesList from "./pages/ServicesList";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* Service components */}
        <Route path="/services/salesforce" element={<Salesforce />} />
        <Route path="/services/data-sciences" element={<DataSciences />} />
        <Route path="/services/iot" element={<IoT />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/services/machine-learning" element={<MachineLearning />} />
        <Route path="/services/sap-services" element={<SAPServices />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
