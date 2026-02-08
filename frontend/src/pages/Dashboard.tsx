import { Card } from "../components/Card";

export function Dashboard() {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <Card>
        <h2 style={{ marginTop: 0 }}>Dashboard</h2>
        <p className="muted">
          Área exemplo para KPIs/cards. Aqui você adapta para o design e dados do projeto real.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 14 }}>
          <div className="card cardPad">
            <strong>Responsivo</strong>
            <p className="muted" style={{ margin: "6px 0 0" }}>Mobile → Desktop</p>
          </div>
          <div className="card cardPad">
            <strong>Organizado</strong>
            <p className="muted" style={{ margin: "6px 0 0" }}>Padrão de pastas e componentes</p>
          </div>
          <div className="card cardPad">
            <strong>API Ready</strong>
            <p className="muted" style={{ margin: "6px 0 0" }}>Serviço central com timeout</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
