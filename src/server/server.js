import config from './config'
import app from './app'

const server = app.listen(config.port, (err) => {
  if (err) logger.error(err)

  console.log(config.port)
})

export default server
