const express = require("express");
const cors = require("cors");
//creating variable- require express..
const middleware = require("./utils/middleware");
require("express-async-errors");
//yo chai kina halya vannale
//yesko kaam chai hamile try catch func use garnu parena error aayo vane aafai next(error) ma janxa
//tara yo use garna lai async ra await chai chainxa..
const app = express();
//creating an app variable..
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());

const appointmentRouter = require("./controllers/appointments");
const signupRouter = require("./controllers/signup");
const loginRouter = require("./controllers/login");
//table haru banauna ko lagi import garya.

MONGODB_URI =
  "mongodb+srv://ashutoshchapagain:Manchester12@cluster0.ocwuqxz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI)
  .then((result) => console.log("mongodb conneted"))
  .catch((error) => console.log(error));

// yo chai mongodb ko URL sangga connect garya ho
// yo line 13 run hudaa hudaii line 19 run hunxa tara line 14 chai tyo paxi hunxa tara if depends upon internet chadoo hunni ki dhilaa..
//ani tyo mathi ko 14 line error aaye ni paxi ko get post wala aauna ni sakxa j ni hunna sakxa.. teslai tyo concept lai chai promise vanxa..

app.use("/api/appointment", appointmentRouter);

//Tala ko code chai errorHandle ko lagi if mathi ko 50 line chai print vayo vane thulo nachaine error aauxa so,tesko lagi chai

app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);
app.use(middleware.errorHandler);

module.exports = app;
