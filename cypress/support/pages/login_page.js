/// <reference types="cypress" />

export default {

    btnLogin(){
        cy.get('#btnLogin')
            .click()
    },

    validarMensagemError(mesagem){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mesagem)


    },
    
    preencherEmail(email){
        cy.get('#user')
        .type(email)
    }, 

    preencherSenha(senha){
        cy.get('#password')
            .type(senha)
    }, 

    validarCadastroSucesso(nome){
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')  
            .should('be.visible')  
            .should('have.text', `Olá, ${nome}`)
    }
    
    
}