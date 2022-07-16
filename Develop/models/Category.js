const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    CREATE TABLE Category (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      category_name VARCHAR(30) NOT NULL
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
