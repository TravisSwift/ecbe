# Object-Relational Mapping (ORM) Challenge: E-commerce Back End Demonstration

# User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies


GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

_______

# Installing the App
Install dependencies in the command line using: npm run install

# Running the App

Run mysql in the command line using: mysql -u root -p

Install the schema in the command line using: source db/schema.sql

Leave mysql in the command line using: quit

Seed the database in the command line using: npm run seed

Start the application in the command line using: node server.js

Use Insomnia or a similar application to interact with HTTP-based APIs


 Screenshot of project using Insomnia
 
![image](https://user-images.githubusercontent.com/96952755/179384459-1108eb7f-6b65-4a49-a7a2-c224b02b613f.png)


Applied technologies:

dotenv

Express.js

MySQL2

Sequelize  

Jest

Insomnia
