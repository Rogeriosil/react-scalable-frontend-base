import { useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import { Card } from "../components/Card";
import { EmptyState } from "../components/EmptyState";
import { Button } from "../components/Button";

type User = { id: number; name: string; email: string };

export function Users() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const users = await api.users();
      setData(users);
    } catch (e: any) {
      setError(e?.message || "Falha ao carregar usuários.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return data;
    return data.filter(u =>
      u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term)
    );
  }, [data, q]);

  return (
    <div className="grid" style={{ gap: 16 }}>
      <Card>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <h2 style={{ margin: 0 }}>Usuários (API)</h2>
            <p className="muted" style={{ marginTop: 6 }}>Exemplo com estados de tela e busca.</p>
          </div>
          <Button variant="ghost" onClick={load} disabled={loading}>Recarregar</Button>
        </div>

        <div className="row" style={{ marginTop: 12 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nome ou e-mail..."
            style={{
              flex: 1,
              minWidth: 220,
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              outline: "none",
            }}
          />
        </div>
      </Card>

      {loading ? (
        <Card><p className="muted" style={{ margin: 0 }}>Carregando usuários...</p></Card>
      ) : error ? (
        <EmptyState title="Não foi possível carregar" description={error} actionLabel="Tentar novamente" onAction={load} />
      ) : filtered.length === 0 ? (
        <EmptyState title="Nada encontrado" description="Tente ajustar sua busca." />
      ) : (
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {filtered.map((u) => (
            <div key={u.id} className="card cardPad">
              <strong>{u.name}</strong>
              <div className="muted" style={{ marginTop: 6 }}>{u.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
