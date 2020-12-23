//CRUD //create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    // console.log("connected correctly");

    const db = client.db(databaseName);

    // db
    //   .collection("users")
    //   .findOne(
    // { _id: new ObjectID("5fe235b00eec89315ca226ab") },
    // (error, user) => {
    //   if (error) {
    // return console.log("Unable to fetch user");
    //   }
    //
    //   if (user == null) {
    // return console.log("user not found");
    //   }
    //
    //   console.log(user);
    // }
    //   );

    // db.collection("users").find({ age: 16 }).toArray((error, users) => {
    //   console.log(users);
    // });
    //
    // db.collection("users").find({ age: 16 }).count((error, count) => {
    //   console.log(count);
    // });

    // db
    //   .collection("tasks")
    //   .findOne(
    // { _id: new ObjectID("5fe237c51ac3860cccfd68fd") },
    // (error, task) => {
    //   if (error) {
    // return console.log(error);
    //   }
    //
    //   console.log(task);
    // }
    //   );
    //
    // db
    //   .collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    // if (error) {
    //   return console.log(error);
    // }
    //
    // console.log(tasks);
    //   });
    // db
    // .collection("users")
    // .updateOne({ name: "Emily" }, { $inc: { age: 1 } })
    // .then(result => {
    // console.log(result.result);
    // })
    // .catch(error => {
    // console.log(error);
    // });

    db
      .collection("tasks")
      .updateMany({ completed: false }, { $set: { completed: true } })
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
