/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const qlueHome = {
  url: function () {
    const url = base.setURL(process.env.BASE_URL_QLUE);
    return url;
  },
  testData: {
    txtHome: 'home',
    txtAboutUs: 'about us',
    txtProjects: 'projects',
    txtCityPartners: 'city partners',
    txtAlliances: 'alliances',
    txtWeHiring: 'we are hiring!',
    txtAddress: 'Jalan Pejaten Barat No. 13, RT.1/RW.8, Pejaten Barat, Pasar Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510',
  },
  elements: {
    home: '.menu-item-27',
    aboutUs: '.menu-item-28',
    projects: '.menu-item-29',
    cityPartners: '.menu-item-30',
    alliances: '.menu-item-31',
    weHiring: '.menu-item-32',
    address: '.fas.fa-map-marker-alt',
  },
  commands: [{
    navigateToQlueHomePage: function () {
      return this.navigate();
    },
    clickButtonProjects: function () {
      base.clickLinkText(this, qlueHome.elements.linkTextProjects);
    },
    assertHome: function () {
      base.assertContainsText(this, qlueHome.elements.home, qlueHome.testData.txtHome);
    },
    assertAboutUs: function () {
      base.assertContainsText(this, qlueHome.elements.aboutUs, qlueHome.testData.txtAboutUs);
    },
    assertProjects: function () {
      base.assertContainsText(this, qlueHome.elements.projects, qlueHome.testData.txtProjects);
    },
    assertCityPartners: function () {
      base.assertContainsText(this, qlueHome.elements.cityPartners, qlueHome.testData.txtCityPartners);
    },
    assertAlliances: function () {
      base.assertContainsText(this, qlueHome.elements.alliances, qlueHome.testData.txtAlliances);
    },
    assertWeHiring: function () {
      base.assertContainsText(this, qlueHome.elements.weHiring, qlueHome.testData.txtWeHiring);
    },
    assertAddress: function () {
      base.assertContainsText(this, qlueHome.elements.address, qlueHome.testData.txtAddress);
    },
  }],
};

module.exports = qlueHome;
