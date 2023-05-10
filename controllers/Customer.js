const Customer = require("../models/Customer");

const addCustomer = async (req, res) => {
  const {
    Name,
    Category,
    Email_id,
    Mobile,
    Project_Value,
    Status,
    Older_id,
    Start_Date,
    End_Date,
    Address,
    Country,
    State,
  } = req.body;

  try {
    const customer = await Customer.create({
      Name,
      Category,
      Email_id,
      Mobile,
      Project_Value,
      Status,
      Older_id,
      Start_Date,
      End_Date,
      Address,
      Country,
      State,
    });
    res.status(201).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editCustomer = async (req, res) => {
  const { id } = req.params;
  const {
    Name,
    Category,
    Email_id,
    Mobile,
    Project_Value,
    Status,
    Older_id,
    Start_Date,
    End_Date,
    Address,
    Country,
    State,
  } = req.body;

  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    if (Name) customer.Name = Name;
    if (Category) customer.Category = Category;
    if (Email_id) customer.Email_id = Email_id;
    if (Mobile) customer.Mobile = Mobile;
    if (Project_Value) customer.Project_Value = Project_Value;
    if (Status) customer.Status = Status;
    if (Older_id) customer.Older_id = Older_id;
    if (Start_Date) customer.Start_Date = Start_Date;
    if (End_Date) customer.End_Date = End_Date;
    if (Address) customer.Address = Address;
    if (Country) customer.Country = Country;
    if (State) customer.State = State;

    await customer.save();
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (error) {
    console.error("Error fetching customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addCustomer, editCustomer, deleteCustomer, getAllCustomers };
