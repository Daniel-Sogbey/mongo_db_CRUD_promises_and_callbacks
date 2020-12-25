const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server up on port " + port);
});

const bcrypt = require("bcrypt");

const myFunction = async () => {
  const password = "12345679";

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);
  console.log(password);

  const isMatch = await bcrypt.compare("12345679", hashedPassword);

  console.log(isMatch);
};

myFunction();
