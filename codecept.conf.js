const { start, stop } = require('./create-server.js');
const demos = require('./src/demos.json');

const routes = {};

demos.forEach(({ demo }) => {
  const key = demo.replace(/-[a-z]/g, (m) => m[1].toUpperCase());
  routes[key] = [demo, ['demo-app', `${demo}-view`, `${demo}-demo`]];
});

exports.config = {
  tests: './test/**.test.js',

  helpers: {
    WebDriver: {
      url: 'http://localhost:8000',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--headless', '--disable-gpu', '--no-sandbox']
        }
      }
    }
  },

  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },

  include: {
    ...routes
  },

  async bootstrap() {
    await start({ port: 8000 });
  },

  async teardown() {
    await stop();
  }
};
