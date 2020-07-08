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

app.post('/api/contact/store', function(req, res) {
  console.log(req.body)
})

app.listen(process.env.EXPRESS_APP_PORT, function () {
  console.log(`Api work on http://localhost:${process.env.EXPRESS_APP_PORT}!`)
})