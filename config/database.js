const Sequelize = require('sequelize');
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/config/config.json')[env];
var db = {};
if (config.use_env_variable) {
   module.exports = new Sequelize(process.env[config.use_env_variable]);
} else {
   module.exports = new Sequelize(config.database, config.username, config.password, config);
}