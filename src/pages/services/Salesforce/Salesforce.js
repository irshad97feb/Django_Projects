import ServiceTemplate from "../../../components/ServiceTemplate/ServiceTemplate";

export default function Salesforce() {
  return (
    <ServiceTemplate
      title="Salesforce"
      subtitle="CRM solutions that accelerate your business growth"
      bannerImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=60"
      introTitle="Salesforce Services by SSGI Analytics"
      introText="At SSGI Analytics, we help companies adopt and scale Salesforce with the right strategy, customization, integrations and automation. We deliver secure and high-performing Salesforce solutions based on your business requirements."
      offeringsTitle="Our Salesforce Offerings"
      offeringsSubtitle="Implementation, customization and support across Salesforce products"
      offerings={[
        {
          title: "Sales Cloud",
          desc: "Improve sales productivity with opportunity management, forecasting, pipelines and dashboards.",
        },
        {
          title: "Service Cloud",
          desc: "Deliver great support experiences using case management, chat, knowledge base and automation.",
        },
        {
          title: "Experience Cloud",
          desc: "Build customer and partner portals with secure authentication, communities and workflows.",
        },
        {
          title: "Salesforce Integration",
          desc: "Integrate Salesforce with third-party apps, ERPs, payments, analytics and internal tools.",
        },
        {
          title: "Apex & LWC Development",
          desc: "Custom development using Apex, Lightning Web Components, flows and trigger optimizations.",
        },
        {
          title: "Support & Maintenance",
          desc: "Continuous support, monitoring, enhancements and performance improvements for your org.",
        },
      ]}
      whyTitle="Why Choose SSGI Analytics?"
      whyPoints={[
        "Certified & experienced Salesforce developers",
        "Clean architecture and scalable development",
        "Secure integrations and automation workflows",
        "Fast delivery with quality and support",
      ]}
      ctaTitle="Want to discuss your Salesforce requirement?"
      ctaText="Let’s schedule a quick call with our expert team."
      processTitle="Our Delivery Process"
      processSteps={[
        {
          title: "1. Requirement Analysis",
          desc: "We understand your business goals and Salesforce needs.",
        },
        {
          title: "2. Solution Design",
          desc: "We create architecture, data model and integration plan.",
        },
        {
          title: "3. Development & Customization",
          desc: "We build custom features using Apex, LWC and flows.",
        },
        {
          title: "4. Testing & Go Live",
          desc: "We test end-to-end and deploy safely to production.",
        },
      ]}
    />
  );
}
