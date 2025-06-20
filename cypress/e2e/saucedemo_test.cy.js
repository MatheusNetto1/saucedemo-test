/// <reference types="cypress" />

function login(username = 'standard_user', password = 'secret_sauce') {
  cy.visit('https://www.saucedemo.com');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
}

describe('Testes de Login', () => {
  it('Login com sucesso', () => {
    login();
    cy.url().should('include', '/inventory.html');
  });

  it('Falha no login com usuário inválido', () => {
    login('usuario_errado', 'secret_sauce');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('Falha no login com senha errada', () => {
    login('standard_user', 'senha_errada');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});

describe('Testes do Fluxo de compra', () => {
  it('Compra um produto com sucesso', () => {
    login();

    // Adicionar ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    // Iniciar checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Johnny');
    cy.get('[data-test="lastName"]').type('Silverhand');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Finalizar compra
    cy.get('[data-test="finish"]').click();
    cy.contains('Thank you for your order!').should('be.visible');
  });

  it('Falha ao tentar finalizar sem preencher dados', () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    // Não preenche os campos e tenta continuar
    cy.get('[data-test="continue"]').click();

    // Verifica erro na tela
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
  });
});

describe('Testes do Carrinho', () => {
  it('Adiciona item ao carrinho e verifica badge', () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('Remove item do carrinho', () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
