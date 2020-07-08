let express = require("express"),
 app = express(),
 bodyParser = require("body-parser")

app.use(bodyParser.json())

require("dotenv").config("../.env")

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set("Access-Control-Allow-Headers", "Content-Type")
  res.send('ok')
})

app.post('/api/contact/store', (req, res) => {
  console.log(req.body)
})

app.listen(process.env.EXPRESS_APP_PORT, () => {
  console.log(`Api started...`)
})