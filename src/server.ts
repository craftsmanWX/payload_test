import express from 'express'
import payload from 'payload'
import insertCustomer from './db_operation/insertCustomer';
const scheduleTask = require('./scheduler/scheduler');



require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here
  const job = scheduleTask();
  insertCustomer();

  app.listen(3000)
}

start()
