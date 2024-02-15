const mogoose = require('mongoose');

const taskSchema = new mogoose.Schema({
    taskname: String,
    user: String,
    description: String
})

module.exports = mogoose.model('task', taskSchema)