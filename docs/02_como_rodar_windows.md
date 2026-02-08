# Como rodar no Windows (passo a passo)

## 1) Instalar Node.js
Instale a versão LTS do Node.js e confirme:
- `node -v`
- `npm -v`

## 2) Abrir o projeto
Abra a pasta `frontend/` no VS Code.

## 3) Instalar dependências
No terminal dentro de `frontend/`:
```bash
npm install
```

## 4) Criar .env (se necessário)
No PowerShell (Windows):
```bash
copy .env.example .env
```
Ou no Git Bash:
```bash
cp .env.example .env
```

## 5) Rodar
```bash
npm run dev
```
Abra o endereço mostrado (geralmente `http://localhost:5173`).
