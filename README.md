# Sonora - Loja Virtual de Instrumentos Musicais

Projeto da atividade avaliativa de Criação de Sites: um e-commerce de instrumentos musicais com identidade visual própria (laranja e amarelo, tema escuro e claro), carrinho funcional e simulação completa de compra.

## Funcionalidades

- Página inicial com banner, categorias e ofertas do dia
- Menu de navegação, busca por texto e 6 categorias (Cordas, Teclas, Percussão, Sopro, Áudio e Acessórios)
- Catálogo com filtros (condição, faixa de preço e marca) e ordenação
- Página de detalhes do produto com descrição, avaliações e escolha de quantidade
- Carrinho com alteração de quantidade, remoção de itens, cupom (`SONORA10`) e cálculo do total
- Checkout com dados do cliente e validações (CPF, CEP, e-mail, cartão e validade)
- Pagamento por cartão de crédito (parcelamento em até 10x), cartão de débito e PIX (QR Code e código copia e cola simulados)
- Confirmação de compra com resumo do pedido
- Cadastro, login e perfil do usuário (dados pessoais e formas de pagamento registradas), simulados e salvos no navegador
- Tema escuro e claro e layout responsivo para computador e celular

## Tecnologias

HTML5, CSS3 (variáveis, grid, flexbox e media queries), JavaScript puro, Git e GitHub. Os dados ficam no `localStorage` do navegador.

## Estrutura

```
index.html, produtos.html, produto.html, carrinho.html,
checkout.html, confirmacao.html, entrar.html, criar-conta.html, perfil.html
css/style.css
js/script.js     produtos, carrinho, cabeçalho, tema, páginas, validações e pagamento
img/             fotos dos produtos
```

## Como executar

Baixe ou clone o repositório e abra o arquivo `index.html` no navegador. Não precisa instalar nada. Se preferir, use a extensão Live Server do VS Code.

## Observações

Nenhum pagamento é real: use apenas dados fictícios. Produtos, preços, marcas e avaliações são exemplos criados para o projeto.
