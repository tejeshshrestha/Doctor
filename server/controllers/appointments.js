const appointmentRouter = require("express").Router();
const Appointment = require("../models/appointment");
const jwt = require("jsonwebtoken");
const signup = require("../models/signupmodel");
//Yo vaneko table banako...
const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  //This line retrieves the value of the 'authorization' header from the HTTP request.
  if (authorization && authorization.startsWith("Bearer ")) {
    // Bearer is used for API token-based authentication
    return authorization.replace("Bearer ", "");
  }
  return null;
  //pass the request object from your Express.js route handler to it.
};
appointmentRouter.get("/", async (req, res) => {
  // mathi ko line chai data haru sabai {}- all find garxaa
  const appointment = await Appointment.find({}).populate("signup", {
    email: 1,
    name:1
  });
  //populate method is used to fetch data from the signup and include it in the result.
  return res.json(appointment);
  //if mathi ko kunai code chai error yaa line 26 ko error vayena vane database ma chai table ko json ko form ma data dekhauxa..
  //the code sends the array of appointments as a JSON response back to the client line 21
});

appointmentRouter.post("/", async (req, res) => {
  const decodedToken = jwt.verify(getTokenFrom(req), "ashutosh");
  if (!decodedToken.id) {
    return res.status(401).json({ error: "token invalid" });
  }

  const user = await signup.findById(decodedToken.id);

  const appointment = new Appointment({
    ...req.body,
    signup: user._id,
    status: false,
  });

  const savedAppointment = await appointment.save();
  user.appointments = user.appointments.concat(savedAppointment._id);
  await user.save();

  return res.status(201).json(savedAppointment);
  // 201 le chai kehi kura create garyo vanxa.. ani savedAppointment- yo garyo vane data chai id banayera aauxa.
});

//Tala ko code chai for delete ko lagi
appointmentRouter.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndRemove(req.params.id);
  //id chai delete garni ho ni tae so req.params ma chai kun id ho teslai chai parameter ma lagera delete garni kaam garxa..
  return res.status(204).end();
  //204 le chai delete but not return anything..
  //yo return kehi hudaina ni tae so end garya yetikai...
});

// Tala code for update data
appointmentRouter.put("/:id", async (req, res) => {
  const appointment = {
    ...req.body,
  };
  const updatedAppointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    appointment,
    { new: true }
  );
  return res.json(updatedAppointment);
});

appointmentRouter.delete("/", async (req, res) => {
  await Appointment.deleteMany();
  return res.status(204).end();
});

module.exports = appointmentRouter;
