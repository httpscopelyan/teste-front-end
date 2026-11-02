# ADR-004: Exportação nomeada e índice central de componentes

## Status
Aceita

## Context
O projeto tem mais de 20 componentes em pastas diferentes, e os imports relativos ficavam longos e inconsistentes (`../../ProductCard/ProductCard`). Alguns componentes usavam `export default` e outros exportação nomeada.

## Decision
Todo componente usa `export function Nome` e é registrado em `src/components/index.ts`. Quem precisa de um componente importa do índice.

## Rationale
- Um único ponto de entrada para quem consome os componentes.
- Exportação nomeada facilita a busca, a refatoração e o autocompletar.
- Nomes de arquivo, de componente e de classe seguem o mesmo padrão (`Button/Button.tsx`, `Button.scss`).

## Consequences
- Todo componente novo precisa de uma linha no índice.
- Os componentes importam do índice que os exporta, formando um ciclo de importação. Funciona porque cada componente só é usado na renderização, não na avaliação do módulo.
