const signupRouter = require("express").Router();
const Signup = require("../models/signupmodel");
const bcrypt = require("bcrypt");

signupRouter.get("/", async (req, res) => {
  const sign = await Signup.find({}).populate("appointments", {
    name: 1,
    email: 1,
    phone: 1,
    date: 1,
    time: 1,
    problem: 1,
  });
  return res.json(sign);
});

signupRouter.get("/:id", async (req, res) => {
  const sign = await Signup.findById(req.params.id).populate("appointments", {
    name: 1,
    email: 1,
    phone: 1,
    date: 1,
    time: 1,
    problem: 1,
    status: 1,
  });
  return res.json(sign);
});

signupRouter.post("/", async (req, res) => {
  const { Firstname, Lastname, email, password, appointments } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  //yo garyo vane chai password ko hash banxa..
  const sign = new Signup({
    Firstname,
    Lastname,
    email,
    passwordHash,
    appointments,
  });

  const savedsignup = await sign.save();

  return res.status(201).json(savedsignup);
});

signupRouter.delete("/:id", async (req, res) => {
  await Signup.findByIdAndRemove(req.params.id);
  return res.status(204).end();
});

signupRouter.put("/:id", async (req, res) => {
  const sign = {
    ...req.body,
  };
  const updatedsignup = await Signup.findByIdAndUpdate(req.params.id, sign, {
    new: true,
  });
  return res.json(updatedsignup);
});

signupRouter.delete("/", async (req, res) => {
  await Signup.deleteMany();
  return res.status(204).end();
});
module.exports = signupRouter;
