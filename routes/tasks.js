const express = require('express')
const router = express.Router();
const TaskController = require('../controllers/task')

// add a task
router.post('/', TaskController.createTask)


module.exports = router