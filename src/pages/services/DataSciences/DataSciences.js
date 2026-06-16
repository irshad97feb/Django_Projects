import ServiceTemplate from "../../../components/ServiceTemplate/ServiceTemplate";

export default function DataSciences() {
  return (
    <ServiceTemplate
      title="Data Sciences"
      subtitle="Turn raw data into actionable insights for smarter decisions"
      bannerImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=60"
      introTitle="Data Science Services by SSGI Analytics"
      introText="We help you build data-driven products using analytics, predictive models and dashboards. From data engineering to machine learning deployment, our solutions enable faster business decisions and measurable outcomes."
      offeringsTitle="Our Data Science Offerings"
      offeringsSubtitle="From data pipelines to predictive intelligence"
      offerings={[
        { title: "Data Analytics", desc: "KPI dashboards, business insights and decision analytics." },
        { title: "Data Engineering", desc: "ETL pipelines, data lakes and scalable warehousing." },
        { title: "Predictive Modeling", desc: "Forecasting, classification, recommendation systems." },
        { title: "BI Dashboards", desc: "PowerBI/Tableau dashboards and data storytelling." },
        { title: "Data Quality & Governance", desc: "Validation, cleansing, lineage and governance standards." },
        { title: "Model Deployment", desc: "Deploy ML models using APIs, cloud and monitoring." },
      ]}
      whyTitle="Why Choose SSGI Analytics?"
      whyPoints={[
        "Strong SQL + data engineering skills",
        "Business-focused analytics approach",
        "Scalable cloud ready architectures",
        "Monitoring, retraining and support",
      ]}
      ctaTitle="Need analytics or a data platform?"
      ctaText="Let’s discuss your data goals and build a roadmap."
      processTitle="Our Delivery Process"
      processSteps={[
        { title: "1. Discovery", desc: "Understand objectives, KPIs, sources and constraints." },
        { title: "2. Data Preparation", desc: "Clean, transform and unify data for analysis." },
        { title: "3. Modeling & Insights", desc: "Build models, dashboards and actionable insights." },
        { title: "4. Deploy & Improve", desc: "Deploy, monitor and continuously improve outcomes." },
      ]}
    />
  );
}
