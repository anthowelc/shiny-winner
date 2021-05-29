describe('Création du message', () => {
  it('Affiche une liste de messages', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="messageText"]').type('New message')
  })
})
