const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
  //   CREATE TABLE Category (
  //     id INTEGER AUTO_INCREMENT PRIMARY KEY,
  //     category_name VARCHAR(30) NOT NULL
  // },
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },


  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
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
