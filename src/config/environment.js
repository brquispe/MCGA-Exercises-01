require('dotenv').config()
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://root:root@cluster0.8ligc.mongodb.net/mcga?retryWrites=true&w=majority'

module.exports = {
  PORT,
  DATABASE_URL
}