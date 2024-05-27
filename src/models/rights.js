const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    //    iski relationship hogi staff ke sath
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "staff", // jis name se staff model export kiya hoga
    },
    right: {
      type: String,
      required: [true, "Please Enter right"],
    },
  },
  { timestamps: true }
);

const rights = mongoose.model("rights", schema);
module.exports = rights;
