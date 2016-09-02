import path                 from 'path'
import express              from 'express'
import webpack              from 'webpack'
import webpackMiddleware    from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from './webpack.config.dev'

const app      = express()
const compiler = webpack(webpackConfig)

app.set('port', process.env.PORT || 3000)

app.use(webpackMiddleware( compiler
                         , { publicPath: webpackConfig.output.publicPath
                           , noInfo:     true
                           }
                         )
       )
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen( app.get('port')
          , () => console.log('Listening on port ' + app.get('port'))
          )
