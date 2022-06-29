const mongoose = require('mongoose');

// creating a schema
const TodoSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true,
    }
})

// export the schema
module.exports = mongoose.model('todo', TodoSchema);