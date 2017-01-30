describe('cypress failed log', () => {
  beforeEach(function openUrl () {
    cy.visit('/')
  })

  afterEach(function makeDummyCommands () {
    // more dummy commands on purpose. Can we get
    // the right screenshot when the test actual failed?
    cy.visit('/')
      .wait(100)
      .wait(100)
      .wait(100)
      .wait(100)
      .wait(100)
      .wait(100)
      .wait(100)
      .wait(100)
  })

  // this test fails on purpose
  it('finds aliens', () => {
    cy.contains('a', 'videos')
      .click()
      .wait(100)

    cy.url()
      .should('contain', 'videos')

    cy.contains('Aliens')
      .should('be.visible')
  })
})