const Staff = require("../models/staff");

const createStaff = async (req, res) => {
  const { name, email } = req.body;

  try {
    const stf = await Staff.create({
      name,
      email,
    });
    return res.status(201).json({
      success: true,
      stf,
    });
  } catch (error) {
    console.log("Error in Staff Controller", error);
  }
};
module.exports = createStaff;
