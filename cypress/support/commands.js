Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){    
    cy.get('#firstName').type('Asafe')
    cy.get('#lastName').type('Baran')
    cy.get('#email').type('asafe@exemplo.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})