# ADR-001: Proxy do Vite para a API de produtos

## Status
Aceita

## Context
A lista de produtos é servida por `https://app.econverse.com.br/.../produtos.json`. A resposta tem status 200, mas não inclui o cabeçalho `Access-Control-Allow-Origin`. Chamar a URL direto do navegador falha com erro de CORS.
Opções consideradas: chamar a URL direto, usar um serviço de proxy público, criar um backend próprio e usar o proxy do Vite.

## Decision
Configurar `server.proxy` e `preview.proxy` no `vite.config.ts`. O front chama `/api/...` e o Vite repassa para `https://app.econverse.com.br`, com `changeOrigin` e removendo o prefixo `/api`.

## Rationale
- Resolve o CORS sem código extra no front nem dependência de terceiros.
- A chamada fica em uma URL da mesma origem, sem expor domínio externo no código.
- Funciona no `npm run dev` e no `npm run preview`.

## Consequences
- O proxy só existe nos servidores do Vite. Em hospedagem estática é preciso configurar um redirecionamento equivalente (por exemplo, `rewrites` na Vercel ou Netlify).
- O `service/products.ts` usa o caminho `/api/...`, e não a URL absoluta.
