# Testes Automatizados com Cypress - Saucedemo
Este projeto contém testes automatizados para o site [SauceDemo](https://www.saucedemo.com), implementados com Cypress e geração de relatórios com Mochawesome.


## Estrutura dos Testes
Os testes estão organizados em três categorias:

1. Testes de Login
    - Login com credenciais válidas
    - Login com usuário inválido
    - Login com senha incorreta

2. Testes de Carrinho
    - Adicionar item ao carrinho
    - Remover item do carrinho

3. Fluxo de Compra
    - Finalizar compra com sucesso
    - Teste negativo: tentar finalizar sem preencher dados obrigatórios


## Tecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) – Framework de testes end-to-end
- [Mochawesome](https://github.com/adamgruber/mochawesome) – Geração de relatórios interativos
- [Node.js](https://nodejs.org/pt) (versão 14+ recomendada)


## Estrutura de Pastas

```
saucedemo-test/
├── cypress/
│   ├── e2e/                    # testes e2e
│   ├── fixtures/
│   └── support/
├── mochawesome-report/
│   ├── assets/
│   ├── mochawesome.html        # report (html)
│   └── mochawesome.json        # report (json)
└── ...
```


## Instalação

```bash
npm install
```


## Executar os Testes e Gerar o Relatório com Mochawesome

```bash
npx cypress run --reporter mochawesome
```
O relatório **.json** e **.html** serão gerados automaticamente em **saucedemo-test/mochawesome-report/**:


## Observações

- A função de login foi modularizada para facilitar a reutilização entre testes.
- Testes negativos foram incluídos para cobrir cenários com falhas esperadas.


## Licença

Este projeto está licenciado sob os termos da licença [MIT](LICENSE).

Você pode usar, modificar e distribuir livremente, desde que mantenha os créditos do autor.
