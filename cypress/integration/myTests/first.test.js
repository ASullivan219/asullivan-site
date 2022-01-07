
describe('new Tests', () => {
    it('test one', () => {
        cy.visit('http://localhost:3000')
        cy.get('#enter').click()
    })
})