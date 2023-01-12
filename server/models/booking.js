'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Court)
      Booking.belongsTo(models.Member)
    }
  }
  Booking.init({
    dateSchedule: DataTypes.DATE,
    startTime: DataTypes.TIME,
    finishTime: DataTypes.TIME,
    usageTotal: DataTypes.INTEGER,
    payTotal: DataTypes.INTEGER,
    MemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    },
    CourtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};