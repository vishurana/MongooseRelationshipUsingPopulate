// ab main iska kaam hai rights ka data create krna
// data get krna staff ka

const rights = require("../models/rights");

const createRights = async (req, res) => {
  const { staff_id, right } = req.body;
  try {
    const rts = await rights.create({
      staff_id,
      right,
    });
    return res.status(201).json({
      success: true,
      rts,
    });
  } catch (error) {
    console.log("Error isn rights controller ", error);
  }
};

// -----------REFernce hai youtube Programming Experince Populate on Nodejs-----------------------------

// is api me hum populate use krenge
// kyu ki upr wali api se humne staff ki id store kra di rights me
// ab us id ka data chaiye to kaise use krte hai populate
const staffRelationWithRight = async (req, res) => {
  // right ki id denge ka right table se data laane ke liye
  // uske andr hi hogi staff ki id
  const { right_id } = req.body;

  const rightData = await rights.find({ _id: right_id }).populate("staff_id"); // jis property ke andr model me ref de rkha hoga
  // uska name

  res.status(200).json({
    success: true,
    rightData,
  });
};
module.exports = { createRights, staffRelationWithRight };
