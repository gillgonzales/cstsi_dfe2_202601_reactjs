/* eslint-disable no-undef */
/// <reference types="cypress" />

const URL = 'http://localhost:5173/';
const DELAY = 2000;
let busca = 'Test';
let regexBusca = /test/i
let resultId = 0
let expectedId = '51'

context('Navigation Actions', () => {

  
  // it("Aguarda 2s para iniciar os testes: ", ()=> cy.wait(2000)); 
  beforeEach(() => {
    cy.wait(DELAY)
  })

  // afterEach(() => {
  //   cy.wait(DELAY); // waits 2 seconds after each test
  // });

  describe('Navegação em item pesquisado e volta para a home!', () => {

    it(`Filtra pelo produto ${busca} e acessa o produto filtrado`, () => {
       cy.visit(URL)
      cy.get('input[type=search]').type(busca)
      cy.get('input[type=search]').should('have.value', busca)
      cy.wait(1000);
      cy.get('form button').click()
      cy.get('main>div>div>div>div>a')
        .find('div>h3')
        .invoke('text')
        .should('match', regexBusca)
    
    cy.wait(2000);
    // it('Agora clica no card resultado', () => {
      cy.get('main>div>div>div>div>a')
        .first().click()
    // });

    // it('Verifica o resultado da pesquisa', () => {
      cy.wait(2000);
      cy.get('main>div>div>div>a')
        .find('div>h3')
        .invoke('text')
        .should('match', regexBusca);
    // });

    // it('Verifica o ID do produto pesquisado', () => {
      cy.get("[data-test='result-id']")
        .then(($el) => {
          resultId = $el.attr('data-value')
          console.log(resultId)
          // return resultId
          expect(resultId).to.eq(expectedId)
        })
      });

    it(`Volta para a página inicial a partir da URL do produto`, () => {
      const urlString = URL + 'produto/' + resultId;
      cy.visit(urlString)
      // cy.wait(1000);
      // cy.get('main>div>a')
      //   .should('have.text', 'Voltar')
      //   .click()
      cy.get("[data-test='botao_voltar']").click()
    });
  });
});