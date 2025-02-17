import serverless from 'aws-serverless-express'
import app from './app.js'

const server = serverless.createServer(app)

export const handler = (event, context) => {
  return serverless.proxy(server, event, context)
}
