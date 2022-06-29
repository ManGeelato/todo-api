const router = require('express').Router();
const todoModel = require("../models/todoModel");

// creating post route
router.post("/api/todo", async (req, res) => {
    try{
        const newTodo = new todoModel({
            item: req.body.item
        })
        const saveTodo = await newTodo.save();
        res.status(200).json(saveTodo);
    }catch(err){
        res.json(err);
    }
})

// creating get route
router.get("/api/todos", async (req, res) => {
    try{
        const allTodos = await todoModel.find({});
        res.status(200).json(allTodos);
    }catch(err){
        res.json(err);
    }
})

// creating update route
router.put("/api/todo/:id", async (req, res) => {
    try{
        const updateItem = await todoModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Successfully updated!");
    }catch (err){
        res.json(err);
    }
})

// creating delete route
router.delete("/api/todo/:id", async (req, res) => {
    try{
        const deleteTodo = await todoModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Successfull deleted");
    }catch(err){
        res.json(err);
    }
})

// export router
module.exports = router;