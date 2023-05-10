const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Category: { type: String, required: true },
  Email_id: { type: String, required: true },
  Mobile: { type: String, required: true },
  Project_Value: { type: String, required: true },
  Status: { type: String, required: true },
  Older_id: { type: String, required: true },
  Start_Date: { type: String, required: true },
  End_Date: { type: String, required: true },
  Address: { type: String, required: true },
  Country: { type: String, required: true },
  State: { type: String, required: true },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
