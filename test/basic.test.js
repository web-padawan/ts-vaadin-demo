Feature('Basic test');

Scenario('Check the app title', ({ I }) => {
  I.amOnPage('/');
  I.see('TypeScript Vaadin examples', { shadow: ['demo-app'] });
});

Scenario('Open the dialog', ({ I, dialogRenderer }) => {
  const [page, path] = dialogRenderer;
  I.amOnPage(`/${page}`);
  I.click({ shadow: [...path, 'vaadin-button'] });
  I.seeElement('vaadin-dialog-overlay');
  I.seeElement('vaadin-date-picker');
});
