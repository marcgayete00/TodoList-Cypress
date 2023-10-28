describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('[id="taskInput"]')
    .type('New Task')

    cy.get('[id="addButton"]') 
      .click()

    cy.get('[id="completeButton"]') 
    .click()

    cy.get('[id="taskListItem"]')
    .should('contain', 'New Task')
    .should('have.class', 'completed')
  })
})