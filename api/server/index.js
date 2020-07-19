"use strict";
exports.__esModule = true;
var contactController = require("./controllers/contact");
require("dotenv").config("../.env");
// Create default server.
var express = require("express"), app = express(), bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Set add contact handle.
app.post('/api/contact/store', function (req, res) {
    contactController.insertContact(req, res);
    res.send("Ok");
});
app.listen(process.env.EXPRESS_APP_PORT, function () {
    console.log('API app started....');
});
// mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}).then(() => {
//   app.listen(process.env.EXPRESS_APP_PORT, () => {
//     console.log('API app started....')
//   })
// }).catch((err: any) => {
//   console.log(err.message)
//   process.exit(1)
// })
