import ServiceTemplate from "../../../components/ServiceTemplate/ServiceTemplate";

export default function IoT() {
  return (
    <ServiceTemplate
      title="Internet of Things (IoT)"
      subtitle="Connect devices, collect data and enable real-time intelligence"
      bannerImage="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1400&q=60"
      introTitle="IoT Solutions by SSGI Analytics"
      introText="We build IoT platforms for monitoring, predictive maintenance and real-time analytics. Our IoT services connect sensors, devices and cloud systems to help organizations operate smarter and faster."
      offeringsTitle="Our IoT Offerings"
      offeringsSubtitle="End-to-end device to cloud solutions"
      offerings={[
        { title: "Device Connectivity", desc: "Connect sensors and devices using secure protocols." },
        { title: "IoT Data Platforms", desc: "Ingestion pipelines for streaming and real-time events." },
        { title: "Dashboards & Alerts", desc: "Live dashboards with rule-based alerts and triggers." },
        { title: "Edge Computing", desc: "Processing near devices for low latency performance." },
        { title: "IoT Security", desc: "Authentication, encryption and secure device onboarding." },
        { title: "Predictive Maintenance", desc: "Detect failures early using AI/ML models and signals." },
      ]}
      whyTitle="Why Choose SSGI Analytics?"
      whyPoints={[
        "Secure device-to-cloud architecture",
        "Real-time telemetry processing expertise",
        "Edge + cloud hybrid deployments",
        "Scalable monitoring and alerting",
      ]}
      ctaTitle="Want to build an IoT platform?"
      ctaText="Let’s build a connected system for your industry."
      processTitle="Our Delivery Process"
      processSteps={[
        { title: "1. Requirements", desc: "Define devices, network, telemetry and scale." },
        { title: "2. Architecture", desc: "Design edge-cloud, security and data pipeline." },
        { title: "3. Implementation", desc: "Develop ingestion, APIs, UI dashboards and alerts." },
        { title: "4. Deploy & Monitor", desc: "Deploy on cloud and implement monitoring/observability." },
      ]}
    />
  );
}
