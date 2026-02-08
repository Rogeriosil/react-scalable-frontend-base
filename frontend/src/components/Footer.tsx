export function Footer() {
  return (
    <footer style={{ padding: "28px 0", borderTop: "1px solid var(--border)", marginTop: 28 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <span className="muted">© {new Date().getFullYear()} Front-end MVP</span>
        <span className="muted">Base organizada para projetos reais</span>
      </div>
    </footer>
  );
}
