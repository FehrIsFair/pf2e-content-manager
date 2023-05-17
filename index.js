import express from "express"
import bodyParser from "body-parser"
import * as dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

import apiRouter from "./routes/api.routes"

dotenv.config()

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')))

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/api', apiRouter)

app.use(cors())

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

