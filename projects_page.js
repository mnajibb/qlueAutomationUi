/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const qlueProject = {
  url: function () {
    const url = base.setURL(process.env.BASE_URL_QLUE_PROJECT);
    return url;
  },
  testData: {
    txtQlueMyCity: 'Qlue x MyCity',
    txtQlueWork: 'QlueWork',
    txtQlueVision: 'QlueVision',
    txtAddress: 'Jalan Pejaten Barat No. 13, RT.1/RW.8, Pejaten Barat, Pasar Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510',
  },
  elements: {
    qlueMyCity: '.ts-qlue-x-mycity',
    qlueWork: '.ts-qlue-work',
    qlueVision: '.ts-qlue-vision',
    address: '.fas.fa-map-marker-alt',
  },
  commands: [{
    navigateToQlueProjectPage: function () {
      return this.navigate();
    },
    assertQlueMyCity: function () {
      base.assertContainsText(this, qlueHome.elements.qlueMyCity, qlueHome.testData.txtQlueMyCity);
    },
    assertQlueWork: function () {
      base.assertContainsText(this, qlueHome.elements.qlueWork, qlueHome.testData.txtQlueVision);
    },
    assertQlueVision: function () {
      base.assertContainsText(this, qlueHome.elements.qlueVision, qlueHome.testData.txtQlueMyCity);
    },
  }],
};

module.exports = qlueProject;
