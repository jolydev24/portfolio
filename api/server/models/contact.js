"use strict";
exports.__esModule = true;
exports.ContactSchema = void 0;
var mongoose = require("mongoose");
// Create contact schema.
exports.ContactSchema = new mongoose.Schema({
    contact: { type: String, required: true },
    email: { type: String, required: true }
});
// Create.
var Contacts = mongoose.model("Contact", exports.ContactSchema);
exports["default"] = Contacts;
