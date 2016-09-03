const express = require('express')
const path    = require('path')

const app = express()
app.set('port', process.env.PORT || 3000)

if (process.env.NODE_ENV !== 'production') {
  const webpack              = require('webpack')
  const webpackMiddleware    = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig        = require('./webpack.config.dev')

  const compiler = webpack(webpackConfig)

  app.use(webpackMiddleware( compiler
                           , { publicPath: webpackConfig.output.publicPath
                             , noInfo:     true
                             }
                           )
         )
  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen( app.get('port')
          , () => console.log('Listening on port ' + app.get('port'))
          )
