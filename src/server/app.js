import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import config from './config'

const app = express()

if (config.env.match(/development|test/)) {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('../../webpack.config.babel.js').default

  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      noInfo: true,
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    reload: true
  }))

  app.use(morgan('tiny'))
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use(express.static(config.paths.public))

  app.get('/users', function (req, res) {
    res.send('GET request to the homepage');
  });

  app.get('/*', (req, res) => {
    res.set('content-type', 'text/html')

    try {
      res.write(middleware.fileSystem.readFileSync(`${config.paths.dist}/index.html`))
    } catch (err) {
      // logger.error(err)
      console.log(err)
    }

    res.end()
  })
}

export default app;