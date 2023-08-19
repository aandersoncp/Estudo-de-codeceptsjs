Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.waitForText('Login')
    I.click('Login')
    I.waitForText('Login')
    I.fillField('#user', 'teste1297@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado')
}).tag('@sucesso')

Scenario('Tentando logar digitando somente o email',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.waitForText('Login')
    I.click('Login')
    I.waitForText('Login')
    I.fillField('#user', 'teste1297@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida')
})