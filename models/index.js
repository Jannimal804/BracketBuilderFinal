'use strict';

const fs = require('fs');
const path = require('path');
const mysql = require('mysql2')
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {
    // localhost
    localhost: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Gobby911!",
      database: "reactbb"
    },
  
    // jawsDB
    jawsDB: {
      host: "r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "tu8b11r97wchwahe",
      password: "yuiipv4vzv2mimh5",
      database: "zs0bi1zchir55u2a"
    }
  
};
// we placed the connections in this source object



// we use source.[name of connection] to hook into mysql
// var connection = mysql.createConnection(source.localhost);

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

//let sequelize;
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;