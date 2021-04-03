const getDb = require('../util/database').getDb;
const taskSchema=new mongoose.Schema({
    name: String
});
const task= mongoose.model("task", taskSchema);
const task1=new task({
    name:"task1"
});
const task2=new task({
    name:"task2"
});
const task3=new task({
    name:"task3"
});
let ListItems=[task1,task2,task3];
class todo{

save(){const db=getDb();
 db.collection('task')
.insertMany(ListItems)
  .then(result=>{
    console.log(result);
  })
  .catch(err=>{
    console.log(err);
  });
}

}
 module.exports = todo;