const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  //database ma halna lai schema use garnai parxa.
  name: String,
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  //tala ko chai link garna lai user ra
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
});

//Yesko kaam chai k ho vanna le
//passwordHash lai chai nadekhauni banauni ho
//delete garya xa _id __v ra passwordhash ani _id ko satto id matra lekhya pani xa..
signupSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const signup = mongoose.model("signup", signupSchema);
module.exports = signup;
