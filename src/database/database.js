const { Sequelize } = require('sequelize');

// import * as dotenv from 'dotenv';

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'postgres',
    schema: process.env.DB_SCHEMA,
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-05:00',
  }
);

module.exports = sequelize;