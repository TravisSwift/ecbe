require('dotenv').config();

const Sequelize = require('sequelize');

// create connection to our database, pass in your MySQL information for username and password
// let sequelize = new Sequelize('ecommerce_db', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });


// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'localhost',
//   // Your MySQL username,
//   user: 'root',
//   // Your MySQL password
//   password: 'Trav4235$',
//   database: 'ecommerce_db'
// });

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    module.exports = sequelize;
// module.exports = db;


