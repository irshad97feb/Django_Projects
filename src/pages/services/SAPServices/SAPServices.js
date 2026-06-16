import ServiceTemplate from "../../../components/ServiceTemplate/ServiceTemplate";

export default function SAPServices() {
  return (
    <ServiceTemplate
      title="SAP Services"
      subtitle="Modernize enterprise operations with SAP expertise"
      bannerImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=60"
      introTitle="SAP Services by SSGI Analytics"
      introText="We provide SAP consulting, implementation, integration and support services. Our SAP experts help enterprises improve operational efficiency and achieve digital transformation goals."
      offeringsTitle="Our SAP Offerings"
      offeringsSubtitle="Implementation, customization and enterprise integration"
      offerings={[
        { title: "SAP Consulting", desc: "Requirement gathering, solution design and roadmap planning." },
        { title: "SAP Implementation", desc: "End-to-end implementation and rollout support." },
        { title: "SAP Integration", desc: "Integrate SAP with other platforms and enterprise apps." },
        { title: "SAP UI5 & Fiori", desc: "Modern UI development using SAP Fiori and UI5." },
        { title: "SAP Support", desc: "Ongoing support, monitoring and issue resolution." },
        { title: "SAP Automation", desc: "Automate SAP workflows and reduce manual tasks." },
      ]}
      whyTitle="Why Choose SSGI Analytics?"
      whyPoints={[
        "Strong SAP domain expertise",
        "Enterprise integration capabilities",
        "Secure, scalable solution delivery",
        "Reliable support and long-term partnership",
      ]}
      ctaTitle="Need SAP Implementation or Support?"
      ctaText="Let’s discuss your SAP roadmap and requirements."
      processTitle="Our Delivery Process"
      processSteps={[
        { title: "1. Assessment", desc: "Understand processes, pain points and priorities." },
        { title: "2. Design", desc: "Design SAP architecture, modules and integrations." },
        { title: "3. Implement", desc: "Configure, develop and test end-to-end." },
        { title: "4. Deploy & Support", desc: "Go-live, hypercare and ongoing support." },
      ]}
    />
  );
}
