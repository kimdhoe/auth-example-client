import merge from 'lodash/merge'

// A NodeEnv is one of:
const DEVELOPMENT = 'development'
const TESTING     = 'testing'
const PRODUCTION  = 'production'

// state - Base configurations.
const config =
  { env:        ''
  , port:       process.env.PORT || 3000
  , secrets:    { jwt: process.env.JWT || 'secretIamlookingforajob' }
  , expireTime: '7 days'
  }

process.env.NODE_ENV = process.env.NODE_ENV || DEVELOPMENT
config.env           = process.env.NODE_ENV

// Environment specific configurations.
let envConfig = {}
try {
  envConfig = require(`./${config.env}`)
}
catch (e) {
  console.log(`No configuration file for ${config.env}`)
}

// effect
merge(config, envConfig)

export default config
