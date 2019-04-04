const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.qlue.home_page();

Given(/^user is at home page$/, () => {
  return browser.navigateToQlueHomePage();
});

When(/^user click projects menu$/, () => {
  return browser.navigateToQlueProjectPage();
});

Then(/^user should see "([^"]*)" menu$/, (options) => {
  if (options === 'Home') {
    return browser.assertHome();
  } else if (options === 'about us') {
    return browser.assertAboutUs();
  } else if (options === 'projects') {
    return browser.assertProjects();
  } else if (options === 'city partners') {
    return browser.assertCityPartners();
  } else if (options === 'alliances') {
    return browser.assertAlliances();
  } else {
    return browser.assertWeHiring();
  }
});

Then(/^user should see address of qlue company$/, () => {
  browser.assertAddress();
});
