import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Calendar from '../app/models/Calendar';

const models = [Calendar];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
