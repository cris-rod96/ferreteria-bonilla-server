import { Sequelize } from 'sequelize'
import { LOCAL_DATABASE_URI } from '../config/config.js'
import { models } from '../models/index.model.js'

const sequelize = new Sequelize(LOCAL_DATABASE_URI, {
  native: false,
  logging: false,
})

models.forEach((model) => model(sequelize))

const { User } = sequelize.models

export { sequelize, User }
