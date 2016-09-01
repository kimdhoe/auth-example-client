import path    from 'path'
import express from 'express'

import installAppMiddlewares     from './middlewares'
import installWebpackMiddlewares from './middlewares/dev'
import apiRouter                 from './api'
import authRouter                from './auth/router'

const app = express()

installAppMiddlewares(app)
installWebpackMiddlewares(app)

app.use('/api',  apiRouter)
app.use('/auth', authRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

export default app
