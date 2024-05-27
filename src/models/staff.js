const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
    },
  },
  {
    timestamps: true,
  }
);

const staff = mongoose.model("staff", schema);
module.exports = staff;
