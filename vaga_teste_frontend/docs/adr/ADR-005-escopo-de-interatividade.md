# ADR-005: Escopo de interatividade da página

## Status
Aceita

## Context
O enunciado pede a vitrine de produtos e o modal ao clicar em um produto. Campos e botões como busca, newsletter e filtro de tags aparecem no layout, mas não têm comportamento especificado.

## Decision
Somente o botão "Comprar" do card (abre o modal) e o fechamento do modal têm comportamento. Busca, newsletter, tags, seletor de quantidade e o "Comprar" do modal não recebem funções.

## Rationale
- Mantém o foco nos objetivos do teste: vitrine consumindo a API e modal do produto.
- Evita lógica sem requisito, o que reduz o código e o risco de comportamento não pedido.

## Consequences
- A primeira tag aparece sempre ativa, como no layout.
- Os formulários de busca e newsletter, se enviados, recarregam a página.
- Para ativar uma interação, basta adicionar o handler no componente correspondente, sem mudar a estrutura.
