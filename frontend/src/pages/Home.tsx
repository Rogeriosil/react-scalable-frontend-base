import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <Card>
        <h1 style={{ marginTop: 0 }}>Base profissional de Front-end</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          Exemplo com responsividade, componentes reutilizáveis e integração com API.
        </p>
        <div className="row" style={{ marginTop: 12 }}>
          <Link to="/dashboard"><Button>Ver Dashboard</Button></Link>
          <Link to="/usuarios"><Button variant="ghost">Ver Usuários (API)</Button></Link>
        </div>
      </Card>
    </div>
  );
}
