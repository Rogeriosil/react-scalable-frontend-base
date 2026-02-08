import { Link, NavLink } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  padding: "10px 12px",
  borderRadius: 12,
  border: `1px solid ${isActive ? "var(--border)" : "transparent"}`,
  background: isActive ? "rgba(37,99,235,.08)" : "transparent",
  fontWeight: 600,
});

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(247,248,251,.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
          <span style={{ width: 34, height: 34, borderRadius: 12, background: "rgba(37,99,235,.12)", display: "grid", placeItems: "center", border: "1px solid var(--border)" }}>⚡</span>
          Front-end MVP
        </Link>

        <nav className="row" style={{ display: "none" }} aria-label="Principal" data-desktop-nav>
          <NavLink to="/" style={navLinkStyle} end>Home</NavLink>
          <NavLink to="/dashboard" style={navLinkStyle}>Dashboard</NavLink>
          <NavLink to="/usuarios" style={navLinkStyle}>Usuários</NavLink>
        </nav>

        <div className="row" style={{ gap: 8 }}>
          <Button variant="ghost" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav">
            ☰ Menu
          </Button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" style={{ borderTop: "1px solid var(--border)", padding: "10px 0" }}>
          <div className="container">
            <div className="grid" style={{ gap: 8 }}>
              <NavLink to="/" style={navLinkStyle} end onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/dashboard" style={navLinkStyle} onClick={() => setOpen(false)}>Dashboard</NavLink>
              <NavLink to="/usuarios" style={navLinkStyle} onClick={() => setOpen(false)}>Usuários</NavLink>
            </div>
          </div>
        </div>
      ) : null}

      <style>{`
        @media (min-width: 860px){
          [data-desktop-nav]{ display: flex !important; }
          #mobile-nav{ display: none; }
          header button[aria-controls="mobile-nav"]{ display: none; }
        }
      `}</style>
    </header>
  );
}
