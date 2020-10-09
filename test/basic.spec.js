const { routes } = require('../routes.js');

const getView = (path) => {
  return path.slice(1).reduce((prev, el) => prev.shadow().find(el), cy.get(path[0]));
};

describe('Basic test', () => {
  it('Check the app title', () => {
    cy.visit('/');
    cy.get('demo-app').shadow().should('contain', 'TypeScript Vaadin examples');
  });

  it('Open the dialog', () => {
    const [page, path] = routes.dialogRenderer;
    cy.visit(`/${page}`);
    getView(path).find('vaadin-button').click({ force: true });
    cy.get('vaadin-dialog-overlay').should('be.visible');
    cy.get('vaadin-date-picker').should('be.visible');
  });
});
