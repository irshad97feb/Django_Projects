export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>
        © All Rights Reserved SSGI Analytics {new Date().getFullYear()}
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 40,
    padding: 20,
    textAlign: "center",
    background: "#583f3f",
  },
};
