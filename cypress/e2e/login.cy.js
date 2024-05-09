/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'

describe('Login', () => {

    beforeEach('Acessar login', () => {
        commum_page.acessarLogin()
    })

    it('E-mail Invalido', () => {
        login_page.btnLogin()
        login_page.validarMensagemError('E-mail inválido.')
    
    })

    it('Senha Invalida ', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.btnLogin()
        login_page.validarMensagemError('Senha inválida.')
    
    })

    it('Senha Vazia ', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.btnLogin()
        login_page.validarMensagemError('Senha inválida.')
    
    })

    it('Cadastro Realizado ', () => {

        const name = faker.internet.email()

        login_page.preencherEmail(name)
        login_page.preencherSenha(faker.internet.password())
        login_page.btnLogin()
        login_page.validarCadastroSucesso(name)
    
    })


    
})