import { Sequelize } from 'sequelize'
import { LOCAL_DATABASE_URI } from '../config/config.js'

const sequelize = new Sequelize(LOCAL_DATABASE_URI, {
  native: false,
  logging: false,
})

export { sequelize }
