# Componentes

Todos os componentes ficam em `src/components` e são exportados por `src/components/index.ts`.

```tsx
import { ProductShowcase, Button } from "../../components"
```

## Fluxo de dados da vitrine

```
Home (useState + getProducts)
 └─ ProductShowcase   guarda o produto selecionado
     ├─ SectionTitle
     ├─ ShowcaseTags
     ├─ ProductCarousel   divide a lista em páginas e controla o Swiper
     │   └─ ProductCard   um por produto, dispara onBuy
     └─ ProductModal      aberto quando selectedProduct existe
```

1. A `Home` busca os produtos e entrega a lista ao `ProductShowcase`.
2. O `ProductCarousel` agrupa a lista em páginas de 4 e renderiza um `ProductCard` por produto.
3. Ao clicar em "Comprar", o card chama `onBuy`, o carrossel repassa o produto e o `ProductShowcase` o guarda no estado.
4. Com um produto selecionado, o `ProductModal` é montado, abre com `showModal()` e, ao fechar, o estado volta para `null`.

## Estrutura da página

### Header

Cabeçalho do site. Compõe `AnnouncementBar`, `MainBar` (logo, busca e ícones) e `Navbar`.

```tsx
<Header />
```

`Navbar` aceita `links?: { label: string; href?: string; active?: boolean }[]`. Sem a prop, usa a lista padrão do layout.

### HeroBanner

Banner principal com o `<h1>` da página e o botão "Ver produto".

```tsx
<HeroBanner />
```

### CategoryList

Lista de categorias, cada uma um `CategoryCard`. A seção tem um `<h2>` oculto que dá o nome acessível.

```tsx
<CategoryList />
```

`CategoryCard`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `icon` | `string` | - | Caminho do ícone |
| `text` | `string` | - | Nome da categoria |
| `href` | `string` | `"#"` | Destino do link |
| `selected` | `boolean` | `false` | Marca a categoria atual com `aria-current` |

### BannerSupport

Dois banners lado a lado, com 13px de espaço, cada um um `BannerCard`. Dados fixos no componente.

```tsx
<BannerSupport />
```

`BannerCard`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `title` | `string` | - | Título do banner (`<h2>`) |
| `description` | `string` | - | Texto de apoio |
| `image` | `string` | - | Imagem de fundo |
| `buttonLabel` | `string` | `"Confira"` | Texto do botão |

### Brands

Bloco "Navegue por marcas" com 5 círculos de marca. Usa `SectionTitle` sem as linhas laterais.

```tsx
<Brands />
```

### Newsletter

Seção com título, texto e formulário (nome, e-mail, aceite dos termos e botão "Inscrever"). Sem props.

```tsx
<Newsletter />
```

### Footer

Rodapé com logo, redes sociais, três colunas de links (Institucional, Ajuda e Termos) e a barra final. Sem props.

```tsx
<Footer />
```

## Vitrine de produtos

### ProductShowcase

Seção completa da vitrine: título, tags ou link "Ver todos", carrossel e modal.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `products` | `Product[]` | - | Produtos exibidos |
| `title` | `string` | `"Produtos relacionados"` | Título da seção |
| `tags` | `string[]` | - | Com tags, mostra `ShowcaseTags`; sem, mostra o link |
| `seeAllLabel` | `string` | `"Ver todos"` | Texto do link final |
| `seeAllHref` | `string` | `"#"` | Destino do link final |

```tsx
<ProductShowcase products={products} tags={["CELULAR", "TABLETS"]} />
```

### ProductCarousel

Carrossel em páginas com Swiper. Mostra 4 cards a partir de 960px de largura e 1 abaixo disso. Retorna `null` quando a lista está vazia.

| Prop | Tipo | Descrição |
|---|---|---|
| `products` | `Product[]` | Produtos a paginar |
| `onBuy` | `(product: Product) => void` | Chamada ao clicar em "Comprar" |

### ProductCard

Card de produto. Preço antigo, parcelamento e frete grátis são textos fixos, como no layout.

| Prop | Tipo | Descrição |
|---|---|---|
| `productName` | `string` | Nome (`<h3>`) |
| `descriptionShort` | `string` | Texto alternativo da imagem |
| `photo` | `string` | URL da foto |
| `price` | `number` | Preço atual, formatado em reais |
| `onBuy` | `() => void` | Opcional, chamada ao clicar em "Comprar" |

### ProductModal

Modal do produto, feito com `<dialog>`. Fecha pelo X, pela tecla Esc ou clicando fora.

| Prop | Tipo | Descrição |
|---|---|---|
| `product` | `Product` | Produto exibido |
| `onClose` | `() => void` | Chamada quando o modal fecha |

```tsx
{selectedProduct && (
    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
)}
```

### ShowcaseTags

Lista de tags de categoria. A primeira aparece ativa.

| Prop | Tipo | Descrição |
|---|---|---|
| `tags` | `string[]` | Rótulos das tags |
| `seeAllLabel` | `string` | Texto do último item |
| `seeAllHref` | `string` | Destino do último item |

### CarouselArrow

Seta do carrossel, ligada ao Swiper por `ref`.

| Prop | Tipo | Descrição |
|---|---|---|
| `direction` | `"previous" \| "next"` | Lado da seta |
| `ref` | `Ref<HTMLButtonElement>` | Elemento usado pelo módulo de navegação |

## Componentes base

### Button

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `children` | `ReactNode` | - | Conteúdo |
| `variant` | `"seebutton" \| "buy" \| "checkbutton" \| "subscribe" \| "modal"` | `"seebutton"` | Estilo do botão |
| `fullWidth` | `boolean` | `false` | Ocupa 100% da largura |
| `type` | `"button" \| "submit"` | `"button"` | Tipo do botão |
| `onClick` | `() => void` | - | Opcional |

| Variante | Uso |
|---|---|
| `seebutton` | "Ver produto" do banner principal |
| `buy` | "Comprar" do card |
| `checkbutton` | "Confira" dos banners |
| `subscribe` | "Inscrever" da newsletter |
| `modal` | "Comprar" do modal |

```tsx
<Button variant="buy" fullWidth onClick={onBuy}>Comprar</Button>
```

### SectionTitle

Título de seção com linhas laterais opcionais.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `id` | `string` | - | `id` do `<h2>`, usado em `aria-labelledby` da seção |
| `title` | `string` | - | Texto |
| `withLines` | `boolean` | `true` | Mostra as linhas laterais |

```tsx
const titleId = useId()

<section aria-labelledby={titleId}>
    <SectionTitle id={titleId} title="Navegue por marcas" withLines={false} />
</section>
```

### Logo

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `href` | `string` | `"/"` | Destino do link |

### IconButton

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `icon` | `string` | - | Caminho do ícone |
| `label` | `string` | - | Nome acessível (`aria-label`) |
| `size` | `number` | `32` | Largura e altura do ícone |
| `type` | `"button" \| "submit"` | `"button"` | Tipo do botão |

### SearchBar

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `placeholder` | `string` | `"O que você está buscando?"` | Texto do campo e do `aria-label` |

## Dependências

| Pacote | Uso |
|---|---|
| `swiper` | Controle de páginas, navegação e efeito fade do carrossel |
| `sass` | Pré-processador dos estilos |

## Estilos

Cada componente importa o seu `.scss` e usa as variáveis de `src/styles` (`@use "../../styles/variables" as *`). As classes seguem BEM.
