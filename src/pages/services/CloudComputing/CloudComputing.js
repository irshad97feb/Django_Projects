import ServiceTemplate from "../../../components/ServiceTemplate/ServiceTemplate";

export default function CloudComputing() {
  return (
    <ServiceTemplate
      title="Cloud Computing"
      subtitle="Build scalable, secure and cloud-native systems"
      bannerImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=60"
      introTitle="Cloud Services by SSGI Analytics"
      introText="We modernize applications using cloud-native technologies, DevOps and Kubernetes. Our cloud solutions help you reduce costs, scale faster and improve availability."
      offeringsTitle="Our Cloud Offerings"
      offeringsSubtitle="Migration, modernization and cloud operations"
      offerings={[
        { title: "Cloud Migration", desc: "Move apps/data to AWS/Azure/GCP safely and efficiently." },
        { title: "Kubernetes & Containers", desc: "Containerization, Helm deployment and scaling." },
        { title: "CI/CD Automation", desc: "Automated build, test and release pipelines." },
        { title: "Monitoring & Observability", desc: "Logs, metrics, tracing using modern tools." },
        { title: "Cloud Security", desc: "IAM, security scanning, hardening and best practices." },
        { title: "Cost Optimization", desc: "Right sizing, autoscaling and billing optimization." },
      ]}
      whyTitle="Why Choose SSGI Analytics?"
      whyPoints={[
        "Strong Kubernetes + DevOps expertise",
        "Secure and automated delivery pipelines",
        "High availability + disaster recovery planning",
        "Performance tuning and cost optimization",
      ]}
      ctaTitle="Need cloud migration or DevOps setup?"
      ctaText="We can help you ship faster and run reliably."
      processTitle="Our Delivery Process"
      processSteps={[
        { title: "1. Assessment", desc: "Review current architecture and define target state." },
        { title: "2. Strategy", desc: "Choose cloud model and migration approach." },
        { title: "3. Implementation", desc: "Migrate, containerize, deploy and automate CI/CD." },
        { title: "4. Operate", desc: "Monitor, optimize performance and reduce cost." },
      ]}
    />
  );
}
