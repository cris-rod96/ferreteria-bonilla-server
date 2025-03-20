import app from './src/app.js'
import { PORT } from './src/config/config.js'
import { sequelize } from './src/database/database.js'

sequelize
  .sync({
    logging: false,
    force: true,
    alter: true,
  })
  .then(() => {
    console.log('Database connected')
    app.listen(PORT, () => {
      console.log(`Server listening by port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
