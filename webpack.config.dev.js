import path    from 'path'
import webpack from 'webpack'

const config =
  { context:  __dirname
  , devtool:  'eval-source-map'
  , entry:    [ 'webpack-hot-middleware/client'
              , path.join(__dirname, 'src/index.js')
              ]
  , output:   { path:       '/'
              , publicPath: '/'
              }
  , plugins:  [ new webpack.HotModuleReplacementPlugin()
              , new webpack.optimize.OccurenceOrderPlugin()
              , new webpack.NoErrorsPlugin()
              ]
  , module:   { loaders: [ { test:    /\.js$/
                           , include: path.join(__dirname, 'src')
                           , loaders: [ 'react-hot', 'babel' ]
                           }
                         ]
              }
  , resolve:  { extensions: [ '', '.js' ] }
  }

export default config
