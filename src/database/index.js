const Sequelize = require('sequelize');
const Users = require('../apps/models/Users');

const models = [Users];
const databaseConfigs = require('../configs/db');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfigs);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
