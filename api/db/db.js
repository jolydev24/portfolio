require("dotenv").config({path: __dirname + '/.env'})

const MongoClient = require("mongodb").MongoClient,
    mongoClient = new MongoClient(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

let db

mongoClient.connect().then(client => {
    db = client
}).catch(err => {
    console.log(`DB Connection Error: ${err.message}`)
})

exports.db = db