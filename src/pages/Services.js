export default function Services() {
  const list = [
    "Website Development (React + Django)",
    "REST API Development (DRF)",
    "Kubernetes & DevOps",
    "Automation Tools",
    "Monitoring & Logging",
  ];

  return (
    <div style={{ padding: 40 }}>
      <h1>Our Services</h1>
      <ul style={{ fontSize: 18 }}>
        {list.map((item, i) => (
          <li key={i} style={{ padding: "8px 0" }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
