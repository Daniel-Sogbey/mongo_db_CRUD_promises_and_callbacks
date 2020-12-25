const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/task-manager-api";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose.connect(url, options);
