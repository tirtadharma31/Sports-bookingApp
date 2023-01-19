'use strict';
const { encrypt } = require('../helpers/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Member.hasMany(models.Booking)
    }
  }
  Member.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    profilImage: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (Member, option) {
        Member.password = encrypt(Member.password)
        Member.profilImage = "https://via.placeholder.com/150"
      }
    },
    sequelize,
    modelName: 'Member',
  });
  return Member;
};