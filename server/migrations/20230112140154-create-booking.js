'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateSchedule: {
        type: Sequelize.DATE
      },
      startTime: {
        type: Sequelize.TIME
      },
      finishTime: {
        type: Sequelize.TIME
      },
      usageTotal: {
        type: Sequelize.INTEGER
      },
      payTotal: {
        type: Sequelize.INTEGER
      },
      MemberId: {
        type: Sequelize.INTEGER
      },
      CourtId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};