const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers || {}),
      },
      signal: controller.signal,
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new ApiError(txt || `Erro HTTP ${res.status}`, res.status);
    }

    return (await res.json()) as T;
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new ApiError("Tempo esgotado ao chamar a API.", 408);
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

export const api = {
  users: () => request<Array<{ id: number; name: string; email: string }>>("/users"),
};
