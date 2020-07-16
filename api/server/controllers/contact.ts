import {Request, Response} from 'express'
import Contacts from "../models/contact"

// Insert contact action.
export let insertContact = (req: Request, res: Response) => {
  console.log(req.body)
  // Create contacts model.
  let contact = new Contacts(req.body)

  // Saving...
  contact.save((err: any) => {
    // Has error?
    err ? res.send(err) : console.log("Successfully added contact!")
  })
}