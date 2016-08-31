import webpack              from 'webpack'
import webpackMiddleware    from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../../webpack.config.dev'

// effect - Installs webpack middlewares into the given app.
function installWebpackMiddlewares (app) {
  const compiler = webpack(webpackConfig)

  app.use(webpackMiddleware( compiler
                          , { publicPath: webpackConfig.output.publicPath
                            , noInfo:     true
                            }
                          )
        )
  app.use(webpackHotMiddleware(compiler))
}

export default installWebpackMiddlewares
