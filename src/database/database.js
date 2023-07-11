//const { Sequelize } = require("sequelize");
import Sequelize from 'sequelize';

import * as dotenv from 'dotenv';
dotenv.config();

/**
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    schema: process.env.DB_SCHEMA,
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-05:00',
  }
);
**/
const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
  "postgres://postgres:postgres@localhost:5432/postgres"

export const sequelize = new Sequelize(CADENA_CONEXION)