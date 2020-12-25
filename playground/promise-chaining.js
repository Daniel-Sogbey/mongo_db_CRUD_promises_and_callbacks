require("../src/db/mongoose");
const User = require("../src/models/user");

//5fe4048225dde52fd8d69f2e
//5fe408322ea87b08604ce7d6

// User.findByIdAndUpdate("5fe408322ea87b08604ce7d6", { age: 1 })
// .then(user => {
// console.log(user);
// return User.countDocuments({ age: 1 });
// })
// .then(result => {
// console.log(result);
// })
// .catch(e => {
// console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
  await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5fe408322ea87b08604ce7d6", 2)
  .then(count => console.log(count))
  .catch(e => console.log(e));
