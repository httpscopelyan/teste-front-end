# Teste Econverse - Vaga Desenvolvedor Front-End

Página Home desenvolvida em React e TypeScript, seguindo o layout do Figma, com vitrine de produtos consumindo a API da Econverse e modal com as informações do produto.

## Tecnologias

- React 19 e TypeScript
- Vite
- Sass (pré-processador)
- Swiper (somente o carrossel da vitrine)

Nenhuma biblioteca de UI (Bootstrap, Foundation e afins) foi utilizada.

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Verifica os tipos (`tsc`) e gera a build em `dist/` |
| `npm run preview` | Serve a build gerada |
| `npm run lint` | Executa o ESLint |

Para validar o projeto, rode `npm run lint` e `npm run build`.

## API de produtos

Os produtos vêm de:

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

Esse servidor não envia o cabeçalho de CORS, então o navegador bloqueia a chamada direta. Por isso o `vite.config.ts` tem um proxy: o front chama `/api/...` e o Vite repassa a requisição para o domínio da Econverse. O proxy funciona em `npm run dev` e `npm run preview`. Em uma hospedagem estática é preciso configurar um redirecionamento equivalente no servidor.

A resposta é validada em `src/service/products.ts`: itens sem nome, descrição, foto ou preço válidos são descartados, e falhas na requisição exibem uma mensagem na página.

## Estrutura

```
src/
├── app/          ponto de entrada da aplicação
├── assets/       ícones, logotipos e imagens
├── components/   componentes, exportados em components/index.ts
├── pages/        páginas (Home)
├── service/      chamadas à API
├── styles/       variáveis Sass (cores, tipografia, espaçamentos, raios, sombras)
├── types/        tipos TypeScript
└── utils/        funções utilitárias
```

## Decisões

- Os estilos usam as variáveis de `src/styles`, e cada componente tem o seu `.scss` no padrão BEM.
- O carrossel mostra 4 produtos por vez, como no layout. Em telas menores o conjunto é reduzido proporcionalmente e, abaixo de 960px, passa a mostrar 1 produto por vez.
- O modal usa o elemento nativo `<dialog>`. Ele abre ao clicar em "Comprar" e fecha pelo X, pela tecla Esc ou clicando fora.
- HTML semântico (`header`, `main`, `nav`, `section`, `article`, `footer`, `dialog`), um único `h1` e textos alternativos nas imagens.
