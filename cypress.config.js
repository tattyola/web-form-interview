const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    // baseUrl: 'https://www.selenium.dev/selenium/web/web-form.html',
    chromeWebSecurity: false,
    video: false,
  },
});
