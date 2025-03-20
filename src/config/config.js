import 'dotenv/config'

const { PORT = 3000, LOCAL_DATABASE_URI } = process.env

export { PORT, LOCAL_DATABASE_URI }
