# ADR-003: Modal com o elemento nativo `<dialog>`

## Status
Aceita

## Context
Ao clicar em "Comprar", o produto deve abrir em um modal com fundo escurecido. O modal precisa prender o foco, fechar com Esc e ser acessível.
Opções consideradas: modal feito com `div` e portal, biblioteca de modal e `<dialog>` nativo.

## Decision
Usar `<dialog>` aberto com `showModal()`. O `ProductShowcase` guarda o produto selecionado e monta o `ProductModal`; o fechamento (X, Esc ou clique no fundo) passa pelo evento `close` do próprio `<dialog>`.

## Rationale
- O navegador já trata foco, Esc, camada superior (top layer) e fundo (`::backdrop`).
- HTML semântico, sem biblioteca e com menos código.
- O estado fica no `ProductShowcase`, então cada vitrine controla o seu modal.

## Consequences
- O reset global (`* { margin: 0 }`) remove a centralização automática do `<dialog>`, por isso o componente define `margin: auto`.
- O clique no fundo é detectado quando o alvo do clique é o próprio `<dialog>`, e por isso o conteúdo fica em um `div` interno que recebe o padding.
