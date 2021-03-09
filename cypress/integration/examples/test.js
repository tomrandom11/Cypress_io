 describe('Test', () => {
     it('Visits the Kitchen Sink', () => {
         cy.visit('https://example.cypress.io')
         cy.contains('type').click()
         cy.get('.action-email')
             .type('fake@email.com')
     })
 })