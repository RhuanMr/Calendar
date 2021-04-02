'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('calendar', {
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
       },
       text: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       date: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false,
       },
       updated_at: {
         type: Sequelize.DATE,
         allowNull: false,
        }
      });
  },

  down: async (queryInterface) => {

     await queryInterface.dropTable('calendar');
  }
};
