import * as mongoose from 'mongoose'

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