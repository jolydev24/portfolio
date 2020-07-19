import {Request, Response} from "express"
import * as contactController from "./controllers/contact"
import * as mongoose from "mongoose"

require("dotenv").config("../.env")

// Create default server.
let express = require("express"),
  app = express(),
  bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Set add contact handle.
app.post('/api/contact/store', (req: Request, res: Response) => {
  contactController.insertContact(req, res)
  res.send("Ok")
})

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}).then(() => {
  app.listen(process.env.EXPRESS_APP_PORT, () => {
    console.log('API app started....')
  })
}).catch((err: any) => {
  console.log(err.message)
  process.exit(1)
})