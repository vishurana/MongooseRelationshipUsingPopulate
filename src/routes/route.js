const express = require("express");
const router = express.Router();

const createStaff = require("../controllers/staff");
const {
  createRights,
  staffRelationWithRight,
} = require("../controllers/rights");

router.post("/staff/create", createStaff);
router.post("/right/create", createRights);
router.post("/right/data", staffRelationWithRight);

module.exports = router;
