describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[id="taskInput"]')
    .type('New Task')

    cy.get('[id="addButton"]') 
      .click()

    cy.get('[id="taskList"]')
    .should('contain', 'New Task')
  })
})