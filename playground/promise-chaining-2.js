require("../src/db/mongoose");
const Task = require("../src/models/task");

//5fe40aa07f5fec38e87f6f6b

// Task.findByIdAndDelete("5fe40aa07f5fec38e87f6f6b")
// .then(task => {
// console.log(task);
// return Task.countDocuments({ completed: false });
// })
// .then(result => {
// console.log(result);
// })
// .catch(e => {
// console.log(e);
// });
//

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount("5fe39d50814b162214c0d25d", false)
  .then(count => console.log(count))
  .catch(e => console.log(e));
