const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.qlue.home_page();

Then(/^user should display product "([^"]*)" in Projects menu$/, (options) => {
  if (options === 'Qlue x MyCity') {
    return browser.assertQlueMyCity();
  } else if (options === 'QlueWork') {
    return browser.assertQlueWork();
  } else {
    return browser.assertQlueVision();
  }
});
