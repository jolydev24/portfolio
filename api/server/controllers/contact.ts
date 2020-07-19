import {Request, Response} from 'express'
import Contacts from "../models/contact"

// Insert contact action.
export let insertContact = (req: Request, res: Response) => {
  // Create contacts model.
  let contact = new Contacts(req.body)

  // Saving...
  contact.save((err: any) => {
    err ? console.log(err) : console.log("Successfully added contact!")
  })
}