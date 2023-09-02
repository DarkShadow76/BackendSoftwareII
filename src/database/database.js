//const { Sequelize } = require("sequelize");
import Sequelize from 'sequelize';

import * as dotenv from 'dotenv';
dotenv.config();

const CADENA_CONEXION = /*process.env.DATABASE_URL ||*/
  "postgres://postgres:postgres@localhost:5432/postgres"

export const sequelize = new Sequelize(CADENA_CONEXION)