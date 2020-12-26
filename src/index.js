const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// app.use((req, res, next) => {
// if (req.method === "GET") {
// res.send("GET requests are disabled");
// } else {
// next();
// }
// });

// app.use((req, res) => {
// if (req.method === "GET" || "POST" || "PATCH" || "DELETE") {
// res.status(503).send("Server under maintenance");
// } else {
// next();
// }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//Without middleware : new request --> run route handler

//With middleware : new request --> do something --> run route handler

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server up on port " + port);
});

// const bcrypt = require("bcrypt");
//
// const myFunction = async () => {
// const password = "12345679";
//
// const hashedPassword = await bcrypt.hash(password, 10);
//
// console.log(hashedPassword);
// console.log(password);
//
// const isMatch = await bcrypt.compare("12345679", hashedPassword);
//
// console.log(isMatch);
// };
//
// myFunction();

// const jwt = require("jsonwebtoken");
//
// const myFunction = async () => {
// const token = await jwt.sign({ _id: "abc123" }, "secretKey", {
// expiresIn: "7 days",
// });
// console.log(token);
//
// const data = await jwt.verify(token, "secretKey");
//
// console.log(data._id);
// };
//
// myFunction();
