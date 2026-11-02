# ADR-002: Carrossel em páginas de 4 cards com Swiper

## Status
Aceita

## Context
O layout mostra 4 cards inteiros por vez, com as setas fora da área dos cards e sem nenhum card cortado. A troca deve apagar os 4 cards atuais em sequência e fazer entrar os próximos na direção do clique.
Opções consideradas: carrossel próprio com `useState` e CSS, scroll horizontal com `scroll-snap` e Swiper.

## Decision
Usar o Swiper com `effect="fade"` e `loop`, onde cada slide é uma página de 4 cards. As setas usam o módulo `Navigation`. A animação de cada card é feita por transições CSS, a partir das classes `swiper-slide-active`, `swiper-slide-prev` e `swiper-slide-next`, e do atributo `data-direction`.

## Rationale
- O Swiper entrega controle de página, loop, acessibilidade (`A11y`) e gesto de arrastar em telas de toque.
- Com uma página por slide, nenhum card é cortado pelo limite do carrossel.
- A animação em CSS evita cálculos de posição em JavaScript.
- Abaixo de 960px mostra 1 card por página. Entre 960px e 1395px os 4 cards são mantidos e o conjunto (título, tags e carrossel) é reduzido com `zoom` em degraus de 60px.

## Consequences
- Dependência extra (`swiper`), usada só nesse componente. Não é biblioteca de UI.
- O `loop` duplica as páginas no DOM.
- O efeito fade do Swiper define `opacity` inline nos slides, por isso o CSS sobrescreve com `!important` para que a opacidade fique só nos cards.
