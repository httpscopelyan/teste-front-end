# Teste Econverse - Vaga Desenvolvedor Front-End

Página Home de e-commerce desenvolvida em React e TypeScript conforme o layout do Figma. A vitrine de produtos consome a API da Econverse e cada produto abre um modal com as suas informações.

## Quick Start

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

## Installation

Pré-requisito: Node.js 20.19 ou superior.

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor de desenvolvimento com proxy da API |
| `npm run build` | Verifica os tipos (`tsc`) e gera a build em `dist/` |
| `npm run preview` | Serve a build gerada, também com o proxy da API |
| `npm run lint` | Executa o ESLint |

Para validar o projeto antes de entregar, rode `npm run lint` e `npm run build`.

## Usage

Todos os componentes são exportados por `src/components/index.ts`. A página `Home` mostra o uso completo:

```tsx
import { BannerSupport, Brands, CategoryList, Footer, Header, HeroBanner, Newsletter, ProductShowcase } from "../../components"

export function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <CategoryList />
                <ProductShowcase products={products} tags={["CELULAR", "TABLETS"]} />
                <BannerSupport />
                <Brands />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}
```

A referência de cada componente, com props e exemplos, está em [docs/components.md](docs/components.md).

## API Reference

### `getProducts(signal?: AbortSignal): Promise<Product[]>`

Busca a lista de produtos em `src/service/products.ts`.

**Parameters:**
- `signal` - opcional, permite cancelar a requisição (usado pela `Home` ao desmontar)

**Returns:** lista de `Product` já validada. Itens sem `productName`, `descriptionShort`, `photo` ou `price` numérico são descartados.

**Throws:** `Error` quando a resposta não é `ok` ou quando `products` não é uma lista.

**Example:**
```typescript
const controller = new AbortController()
const products = await getProducts(controller.signal)
```

### `formatPrice(value: number): string`

Formata um número em reais, em `src/utils/formatPrice.ts`.

**Example:**
```typescript
formatPrice(1499.9) // "R$ 1.499,90"
```

### `Product`

Tipo em `src/types/product.ts`, no formato devolvido pela API.

| Campo | Tipo | Descrição |
|---|---|---|
| `productName` | `string` | Nome do produto |
| `descriptionShort` | `string` | Descrição curta |
| `photo` | `string` | URL da foto |
| `price` | `number` | Preço em reais |

### Endpoint

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

O servidor não envia o cabeçalho de CORS, então o front chama `/api/...` e o Vite repassa a requisição. O motivo e as consequências estão em [ADR-001](docs/adr/ADR-001-proxy-da-api.md).

## Configuration

| Opção | Onde | Valor | Descrição |
|---|---|---|---|
| Proxy `/api` | `vite.config.ts` | `https://app.econverse.com.br` | Destino das chamadas à API, em `dev` e `preview` |
| Cards por página | `ProductCarousel.tsx` | 4 a partir de 960px, 1 abaixo | Quantidade de produtos por vez no carrossel |
| Escala da vitrine | `ProductShowcase.scss` | degraus de 60px entre 1395px e 960px | Reduz o conjunto sem perder os 4 cards |
| Largura do conteúdo | `styles/_spacing.scss` | `$container-width: 1280px` | Largura máxima dos blocos |
| Espaço entre blocos | `styles/_spacing.scss` | `$space-19: 90px` | Margem entre as seções da Home |

As cores, fontes, espaçamentos, raios e sombras ficam em `src/styles`.

## Estrutura

```
src/
├── app/          ponto de entrada da aplicação
├── assets/       ícones, logotipos e imagens
├── components/   componentes, exportados em components/index.ts
├── pages/        páginas (Home)
├── service/      chamadas à API
├── styles/       variáveis Sass
├── types/        tipos compartilhados
└── utils/        funções utilitárias
```

Decisões de arquitetura: [docs/adr](docs/adr).

## Contributing

- Um componente por pasta, com o `.tsx` e o `.scss` de mesmo nome (`ProductCard/ProductCard.tsx` e `ProductCard.scss`).
- Componentes com `export function Nome` e registrados em `components/index.ts`. Imports entre componentes passam pelo índice.
- Interfaces de props ficam no próprio componente. Só tipos compartilhados vão para `src/types`.
- Valores repetidos de cor, fonte, espaçamento, raio e sombra vão para `src/styles`.
- Classes no padrão BEM (`bloco__elemento--modificador`).
- Mensagens de commit no formato `tipo(Escopo): descrição`, por exemplo `feat(Footer): adição do componente Footer`.
- Antes de abrir o commit, rode `npm run lint` e `npm run build`.
