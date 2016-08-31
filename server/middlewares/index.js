import bodyParser from 'body-parser'
import morgan from 'morgan'

// effect - installs application-wide middlewares into the given app.
function installAppMiddlewares (app) {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(morgan('dev'))
}

export default installAppMiddlewares
