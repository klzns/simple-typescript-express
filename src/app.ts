import bodyParser from 'body-parser'
import compression from 'compression'
import express from 'express'
import './utils/logger'

const app: express.Application = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(_, res) {
  res.send('Hello World!')
})

export default app
