const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('sequelize');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
