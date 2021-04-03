const express= require("express");
const mongoose= require("mongoose");
const MongoClient = require('mongodb').MongoClient;
const _ = require("lodash");
const bodypParser= require("body-parser");
const mongoConnect = require("./util/database").mongoConnect;
const date = require(__dirname + "/date.js");
const app = express();
const getDb = require("./util/database").getDb;
app.set('view engine', 'ejs');
app.use(bodypParser.urlencoded({extended:true}));
app.use(express.static("public"));
 mongoose.connect ("mongodb+srv://ishaan:pr25jNshausztS0R@cluster0.vuhnr.mongodb.net/todolist?retryWrites=true&w=majority",{ useNewUrlParser: true } );
let WorkList=[];
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
const ListSchema= new mongoose.Schema({
    name: String,
    items: [taskSchema]

});
const List= mongoose.model("list", ListSchema);
app.get('/:customName',function(req, res){
    const customName=_.capitalize(req.params.customName);
    List.findOne({name:customName}, function(err, foundlist){
        if(!err){
            if(!foundlist)
           {    const list = new List({
            name:customName,
            items: ListItems
        });
        list.save();
              res.redirect("/" + customName); 
           }
            else
            {
                res.render("list", {day: foundlist.name, ListItems:foundlist.items})
            }
        }
      
    })

});
//let day= date();
app.get('/',function(req, res){

task.find({}, function(err, list){
    if(list.length === 0){

        task.insertMany(ListItems,function(err){
            if(err)
            console.log(err);
            else
            console.log('Entered');
             });
             res.redirect("/");
    }
    else
    res.render("list", {day:"Today", ListItems:list});
});

});
app.post("/delete", function(req,res){
const tobedeletedId=req.body.checkbox;
const listName=req.body.listName;
if(listName==="Today"){
    task.findByIdAndRemove({'_id':tobedeletedId}, function(err){
        if(!err)
        console.log('removed');
            else
        console.log(err);
    
    });
    res.redirect("/");
}
else{
    List.findOneAndUpdate({name: listName}, {$pull:{items: {_id: tobedeletedId}}}, function(err, foundlist){
if(!err){
    res.redirect('/' + listName);
}
    });
}

});
app.post("/",function (req, res){
    const item=req.body.NewItem;
    const name=req.body.list;
    const taskx= new task({
        name: item
    });
    if(name === "Today"){
        taskx.save();
        res.redirect("/");
    }
    else{
        List.findOne({name: name}, function(err, foundlist){
            foundlist.items.push(taskx);
            foundlist.save();
            
            res.redirect('/' + name);
        });
    }

    });
    // else{
    //     ListItems.push(item);
      
    // }
  
    
app.get("/work", function(req,res){
    res.render("list",{day: "Work",ListItems:WorkList});
    });

    
        app.listen(3000);
        //console.log(client);   
   

