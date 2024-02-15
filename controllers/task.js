const Task = require('../models/task')

module.exports = {
    createTask: async (req,res) => {
      try{
        const {task, user, description} = req.body
            const tasks = new Task({task, user, description})
            tasks.save()
            console.log(tasks);
            res.json(tasks);
      }
      catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'})
      }
    }

}