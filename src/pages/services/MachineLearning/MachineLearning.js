import ServiceTemplate from "../../../components/ServiceTemplate/ServiceTemplate";

export default function MachineLearning() {
  return (
    <ServiceTemplate
      title="Machine Learning"
      subtitle="Build predictive models to power automation and intelligence"
      bannerImage="https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=1400&q=60"
      introTitle="Machine Learning Services by SSGI Analytics"
      introText="We build machine learning systems for prediction, classification, anomaly detection and recommendations. Our ML solutions are designed for scalability, accuracy and real-world integration."
      offeringsTitle="Our Machine Learning Offerings"
      offeringsSubtitle="From model building to real production deployment"
      offerings={[
        { title: "Prediction & Forecasting", desc: "Demand forecasting and time-series prediction." },
        { title: "Classification Models", desc: "Fraud detection, risk scoring and categorization." },
        { title: "Recommendation Engines", desc: "Personalized product and content recommendations." },
        { title: "Anomaly Detection", desc: "Identify unusual patterns for early alerting." },
        { title: "MLOps & Deployment", desc: "Model CI/CD, versioning and monitoring pipelines." },
        { title: "Model Optimization", desc: "Improve accuracy, latency, cost and performance." },
      ]}
      whyTitle="Why Choose SSGI Analytics?"
      whyPoints={[
        "Strong ML + data engineering foundation",
        "Production-grade ML deployment approach",
        "Monitoring and retraining strategy",
        "Optimization for performance and cost",
      ]}
      ctaTitle="Need an ML solution for your business?"
      ctaText="Let’s convert your data into intelligent automation."
      processTitle="Our Delivery Process"
      processSteps={[
        { title: "1. Define Goal", desc: "Define ML objective and measurable outcomes." },
        { title: "2. Prepare Data", desc: "Feature engineering and data preparation." },
        { title: "3. Train Model", desc: "Model selection, training and evaluation." },
        { title: "4. Deploy & Monitor", desc: "Deploy model, monitor drift and retrain." },
      ]}
    />
  );
}
