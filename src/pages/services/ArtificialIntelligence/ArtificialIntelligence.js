import ServiceTemplate from "../../../components/ServiceTemplate/ServiceTemplate";

export default function ArtificialIntelligence() {
  return (
    <ServiceTemplate
      title="Artificial Intelligence"
      subtitle="Automate and enhance business operations using intelligent systems"
      bannerImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=60"
      introTitle="AI Solutions by SSGI Analytics"
      introText="We build AI-powered solutions like chatbots, intelligent automation and recommendation systems. Our AI services enable smarter operations, better customer experiences and faster decisions."
      offeringsTitle="Our AI Offerings"
      offeringsSubtitle="Practical AI use cases for real business impact"
      offerings={[
        { title: "AI Automation", desc: "Intelligent workflows for faster operations and efficiency." },
        { title: "Chatbots & Assistants", desc: "Customer support bots and internal assistants." },
        { title: "Document Intelligence", desc: "OCR, extraction and classification from documents." },
        { title: "Computer Vision", desc: "Image/video analysis for detection and recognition." },
        { title: "Recommendation Systems", desc: "Personalized recommendations for engagement and sales." },
        { title: "AI Integrations", desc: "Integrate AI models into apps via APIs and services." },
      ]}
      whyTitle="Why Choose SSGI Analytics?"
      whyPoints={[
        "Business-ready AI solutions",
        "Secure and scalable deployments",
        "Strong expertise in model integration",
        "Monitoring and continuous improvement",
      ]}
      ctaTitle="Want to implement AI in your product?"
      ctaText="Let’s explore the right AI solution for your business."
      processTitle="Our Delivery Process"
      processSteps={[
        { title: "1. Use Case Discovery", desc: "Identify AI opportunities and success metrics." },
        { title: "2. Data & Feasibility", desc: "Assess data quality and validate feasibility." },
        { title: "3. Build & Integrate", desc: "Develop models and integrate into applications." },
        { title: "4. Deploy & Monitor", desc: "Production rollout with monitoring and tuning." },
      ]}
    />
  );
}
