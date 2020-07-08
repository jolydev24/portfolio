require("dotenv").config("../.env")

let express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  db = require("../db/db")

app.use(bodyParser.json())

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set("Access-Control-Allow-Headers", "Content-Type")
  res.send('ok')
})

app.post('/api/contact/store', (req, res) => {
  db.db.db("users").collection("contacts").insertOne(req.body, (err, result) => {
    err && console.log(err)

    console.log(`Insert new request: ${result.ops}`)

    db.close()
  })

  console.log(req.body)
})

app.listen(process.env.EXPRESS_APP_PORT, () => {
  console.log(db)
})