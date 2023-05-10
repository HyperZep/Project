const express = require("express");
const {
  addCustomer,
  editCustomer,
  deleteCustomer,
  getAllCustomers,
} = require("../controllers/Customer");

const router = express.Router();

router.post("/", addCustomer);
router.put("/:id", editCustomer);
router.delete("/:id", deleteCustomer);
router.get("/customers", getAllCustomers);

module.exports = router;
