import * as mongoose from 'mongoose'

require("dotenv").config("../../.env")

// Uri to connect with mongo.
// Check ".env".
const uri: string = process.env.DB_URL

// Connect to mongo.
mongoose.connect(uri, (err: any) => {
  // Check error.
  err ? console.log(err.message) : console.log("Successfully Connected!")
})

// Contacts table interface.
export interface IContact extends mongoose.Document {
  contact: string;
  email: string;
}

// Create contact schema.
export const ContactSchema = new mongoose.Schema({
  contact: {type: String, required: true},
  email: {type: String, required: true}
})

// Create.
const Contacts = mongoose.model<IContact>("Contact", ContactSchema)

export default Contacts