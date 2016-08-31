import express from 'express'

import installAppMiddlewares from './middlewares'
import apiRouter             from './api'

const app = express()

installAppMiddlewares(app)

app.use('/api', apiRouter)

app.get('*', (req, res) => {
  res.json({ ok: true })
})

export default app
