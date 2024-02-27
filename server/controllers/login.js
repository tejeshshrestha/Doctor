const signup = require("../models/signupmodel");
const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await signup.findOne({ email });
  console.log(user.passwordHash);
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);
  // compare garya aafle haleko password ra database ma vako pass

  console.log(password);
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(
    //token is a variable that store the generated jwt.
    //jwt.sign have 3 parameters, it is a func provided by jwt
    userForToken,
    //stored userId,...
    "ashutosh",
    //this ashutosh is a secret key used to sign the token.
    { expiresIn: 60 * 60 }
    //the token will expire after 60 minutes
  );

  return (
    res
      .status(200)
      //request was successful..
      .send({ token, email: user.email, name: user.name, id: user._id })
  );
});

module.exports = loginRouter;
