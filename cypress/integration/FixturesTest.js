describe('Fixtures', () => {
let mari
        before(() => {
            cy.fixture('example').then((user) => {
                mari = user
            })
        })

    it('Fixtures Test', () => {

        cy.visit('https://www.facebook.com/')

        cy.get('#email').type(mari.email)
        cy.get('#pass').type(mari.password)
        cy.get('#loginbutton').click()


    })
})