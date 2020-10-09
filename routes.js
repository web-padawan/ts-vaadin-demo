const demos = require('./src/demos.json');

const routes = {};

demos.forEach(({ demo }) => {
  const key = demo.replace(/-[a-z]/g, (m) => m[1].toUpperCase());
  routes[key] = [demo, ['demo-app', `${demo}-view`, `${demo}-demo`]];
});

module.exports = { routes };
