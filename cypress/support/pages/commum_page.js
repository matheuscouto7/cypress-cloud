/// <reference types="cypress" />

export default {

    acessarCadastroUsuario() {
        // só bota o barra porque a gente já configurou ele no cypress.config
        cy.visit('/')
            .get('#top_header')
        
        cy.get('.fa-lock')
            .click()
    },

     acessarLogin(){
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-user')
            .click()  
     }   

}