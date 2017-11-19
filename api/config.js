var config = {};

config.jwt = {};
config.jwt.secret = '7x0jhxt"9(thpX6';

config.mongodb = {};
config.mongodb.url = process.env.MONGO_URL || 'mongodb://localhost/buzzticketdb';

module.exports = config;