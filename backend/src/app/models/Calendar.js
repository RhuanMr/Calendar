import Sequelize, { Model } from 'sequelize';

class Calendar extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
        city: Sequelize.STRING,
        color: Sequelize.STRING,
        date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

export default Calendar;
